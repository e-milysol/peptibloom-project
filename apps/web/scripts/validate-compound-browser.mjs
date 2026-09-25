import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { access, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { dirname, extname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const productionRoot = join(appRoot, 'dist');
const validationRoot = join(appRoot, '.compound-browser-validation');
const validationSource = join(validationRoot, 'src');
const validationPages = join(validationSource, 'pages');
const validationDist = join(validationRoot, 'dist');
const browserProfile = join(validationRoot, 'browser-profile');
const astroCli = join(appRoot, 'node_modules', 'astro', 'bin', 'astro.mjs');

const fixtureMarker = 'test-only.synthetic-subject';
const fixtureDisplayName = 'Sujeto sintético de prueba';
const fixtureBody = 'Texto neutro utilizado únicamente para verificar la canalización de presentación.';

const isInside = (parent, child) => {
  const path = relative(parent, child);
  return path !== '' && !path.startsWith(`..${sep}`) && path !== '..' && !isAbsolute(path);
};

assert.ok(isInside(appRoot, validationRoot), 'validation directory must stay inside apps/web');
assert.equal(validationRoot.endsWith(`${sep}.compound-browser-validation`), true);

const run = (command, args, options = {}) => new Promise((resolvePromise, reject) => {
  const child = spawn(command, args, {
    cwd: appRoot,
    env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' },
    stdio: ['ignore', 'pipe', 'pipe'],
    ...options,
  });
  let stdout = '';
  let stderr = '';
  child.stdout?.on('data', (chunk) => { stdout += chunk; });
  child.stderr?.on('data', (chunk) => { stderr += chunk; });
  child.on('error', reject);
  child.on('exit', (code) => {
    if (code === 0) resolvePromise({ stdout, stderr });
    else reject(new Error(`${command} exited ${code}\n${stdout}\n${stderr}`));
  });
});

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) paths.push(...await walk(path));
    else paths.push(path);
  }
  return paths;
};

const mimeType = (path) => ({
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
}[extname(path).toLowerCase()] ?? 'application/octet-stream');

const createStaticServer = async (root) => {
  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url ?? '/', 'http://validation.local');
      const decoded = decodeURIComponent(url.pathname);
      const relativePath = decoded.endsWith('/') ? `${decoded}index.html` : decoded;
      const filePath = resolve(root, `.${relativePath}`);
      if (filePath !== root && !isInside(root, filePath)) {
        response.writeHead(400).end('Bad request');
        return;
      }
      const fileStat = await stat(filePath).catch(() => null);
      if (!fileStat?.isFile()) {
        response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('Not found');
        return;
      }
      response.writeHead(200, { 'content-type': mimeType(filePath) });
      response.end(await readFile(filePath));
    } catch (error) {
      response.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' }).end(String(error));
    }
  });
  await new Promise((resolvePromise, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolvePromise);
  });
  const address = server.address();
  assert.ok(address && typeof address === 'object');
  return { server, origin: `http://127.0.0.1:${address.port}` };
};

const browserCandidates = [
  process.env.CHROME_PATH,
  process.env.CHROMIUM_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

const findBrowser = async () => {
  for (const candidate of browserCandidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {}
  }
  throw new Error('No supported Chrome/Chromium browser found. Set CHROME_PATH or CHROMIUM_PATH.');
};

const waitFor = async (operation, description, timeoutMs = 15_000) => {
  const deadline = Date.now() + timeoutMs;
  let lastError;
  while (Date.now() < deadline) {
    try {
      const value = await operation();
      if (value) return value;
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolvePromise) => setTimeout(resolvePromise, 100));
  }
  throw new Error(`Timed out waiting for ${description}${lastError ? `: ${lastError}` : ''}`);
};

class CdpClient {
  constructor(socket) {
    this.socket = socket;
    this.nextId = 1;
    this.pending = new Map();
    socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (!message.id) return;
      const pending = this.pending.get(message.id);
      if (!pending) return;
      this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(JSON.stringify(message.error)));
      else pending.resolve(message.result);
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    const result = new Promise((resolvePromise, reject) => {
      this.pending.set(id, { resolve: resolvePromise, reject });
    });
    this.socket.send(JSON.stringify({ id, method, params }));
    return result;
  }
}

const createBrowserSession = async (browserPath) => {
  const portServer = createServer();
  await new Promise((resolvePromise, reject) => {
    portServer.once('error', reject);
    portServer.listen(0, '127.0.0.1', resolvePromise);
  });
  const address = portServer.address();
  assert.ok(address && typeof address === 'object');
  const debuggingPort = address.port;
  await new Promise((resolvePromise) => portServer.close(resolvePromise));

  const browser = spawn(browserPath, [
    '--headless=new',
    '--disable-background-networking',
    '--disable-component-update',
    '--disable-default-apps',
    '--disable-dev-shm-usage',
    '--disable-extensions',
    '--disable-gpu',
    '--disable-sync',
    '--metrics-recording-only',
    '--no-first-run',
    '--no-sandbox',
    `--remote-debugging-port=${debuggingPort}`,
    `--user-data-dir=${browserProfile}`,
    'about:blank',
  ], { stdio: 'ignore' });

  try {
    await waitFor(async () => {
      const response = await fetch(`http://127.0.0.1:${debuggingPort}/json/version`);
      return response.ok;
    }, 'browser debugging endpoint');
    const targetResponse = await fetch(`http://127.0.0.1:${debuggingPort}/json/new?about:blank`, { method: 'PUT' });
    assert.equal(targetResponse.ok, true, 'browser target creation failed');
    const target = await targetResponse.json();
    const socket = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((resolvePromise, reject) => {
      socket.addEventListener('open', resolvePromise, { once: true });
      socket.addEventListener('error', reject, { once: true });
    });
    const client = new CdpClient(socket);
    await Promise.all([
      client.send('Page.enable'),
      client.send('Runtime.enable'),
      client.send('Accessibility.enable'),
      client.send('Network.enable'),
    ]);
    await client.send('Network.setBlockedURLs', {
      urls: [
        'https://fonts.googleapis.com/*',
        'https://fonts.gstatic.com/*',
        'https://static.cloudflareinsights.com/*',
      ],
    });
    return { browser, socket, client };
  } catch (error) {
    browser.kill();
    throw error;
  }
};

const evaluate = async (client, expression) => {
  const response = await client.send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (response.exceptionDetails) throw new Error(JSON.stringify(response.exceptionDetails));
  return response.result.value;
};

const navigate = async (client, url, viewport) => {
  await client.send('Emulation.setDeviceMetricsOverride', {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.mobile,
  });
  const response = await client.send('Page.navigate', { url });
  assert.equal(response.errorText, undefined, `navigation failed for ${url}`);
  await waitFor(
    async () => evaluate(client, 'document.readyState === "complete"'),
    `page load: ${url}`,
  );
};

const assertDocumentStructure = async (client, name) => {
  const audit = await evaluate(client, `(() => {
    const visible = (element) => {
      const style = getComputedStyle(element);
      return style.display !== 'none' && style.visibility !== 'hidden';
    };
    const interactive = [...document.querySelectorAll('a, button, input, select, textarea, [role="button"]')]
      .filter(visible)
      .map((element) => ({
        tag: element.tagName,
        name: element.getAttribute('aria-label')
          || element.getAttribute('title')
          || element.textContent?.trim()
          || element.querySelector('img')?.getAttribute('alt')
          || '',
      }));
    const headings = [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')]
      .filter(visible)
      .map((element) => Number(element.tagName.slice(1)));
    const duplicateIds = [...document.querySelectorAll('[id]')]
      .map((element) => element.id)
      .filter((id, index, ids) => ids.indexOf(id) !== index);
    const rgb = (value) => (value.match(/[\\d.]+/g) ?? []).slice(0, 3).map(Number);
    const luminance = ([red, green, blue]) => {
      const channel = (value) => {
        const normalized = value / 255;
        return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
      };
      return 0.2126 * channel(red) + 0.7152 * channel(green) + 0.0722 * channel(blue);
    };
    const contrast = (foreground, background) => {
      const foregroundLuminance = luminance(rgb(foreground));
      const backgroundLuminance = luminance(rgb(background));
      return (Math.max(foregroundLuminance, backgroundLuminance) + 0.05)
        / (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);
    };
    const contrastTargets = [...document.querySelectorAll(
      '.compound-index__empty h2, .compound-index__empty p, .compound-detail__pending h2, .compound-detail__pending p, .compound-status',
    )].filter(visible).map((element) => {
      const surface = element.closest('.compound-index__empty, .compound-detail__pending, .compound-status');
      return {
        selector: element.className || element.tagName,
        ratio: contrast(getComputedStyle(element).color, getComputedStyle(surface).backgroundColor),
      };
    });
    return {
      htmlLang: document.documentElement.lang,
      mainCount: document.querySelectorAll('main').length,
      h1Count: document.querySelectorAll('h1').length,
      headings,
      duplicateIds,
      unnamedInteractive: interactive.filter(({ name }) => !name),
      skipTargetExists: Boolean(document.querySelector(document.querySelector('.skip-link')?.hash || '#missing')),
      horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      lowContrast: contrastTargets.filter(({ ratio }) => ratio < 4.5),
    };
  })()`);

  assert.equal(audit.htmlLang, 'es', `${name}: document language`);
  assert.equal(audit.mainCount, 1, `${name}: one main landmark expected`);
  assert.equal(audit.h1Count, 1, `${name}: one h1 expected`);
  assert.deepEqual(audit.duplicateIds, [], `${name}: duplicate ids`);
  assert.deepEqual(audit.unnamedInteractive, [], `${name}: unnamed interactive elements`);
  assert.equal(audit.skipTargetExists, true, `${name}: skip-link target missing`);
  assert.equal(audit.horizontalOverflow, false, `${name}: horizontal viewport overflow`);
  assert.deepEqual(audit.lowContrast, [], `${name}: obvious compound-state contrast failure`);
  for (let index = 1; index < audit.headings.length; index += 1) {
    assert.ok(audit.headings[index] <= audit.headings[index - 1] + 1, `${name}: heading level skipped`);
  }

  const tree = await client.send('Accessibility.getFullAXTree');
  const visibleRoles = tree.nodes
    .filter((node) => !node.ignored)
    .map((node) => node.role?.value)
    .filter(Boolean);
  assert.ok(visibleRoles.includes('main'), `${name}: accessible main landmark missing`);
  assert.ok(visibleRoles.includes('navigation'), `${name}: accessible navigation landmark missing`);
  assert.ok(visibleRoles.includes('contentinfo'), `${name}: accessible footer landmark missing`);
  assert.ok(visibleRoles.includes('heading'), `${name}: accessible heading missing`);

  await client.send('Runtime.evaluate', { expression: 'document.activeElement?.blur()' });
  await client.send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
  await client.send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Tab', code: 'Tab', windowsVirtualKeyCode: 9 });
  const focused = await evaluate(client, `(() => {
    const element = document.activeElement;
    return {
      tag: element?.tagName,
      name: element?.getAttribute('aria-label') || element?.textContent?.trim() || '',
    };
  })()`);
  assert.ok(['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(focused.tag), `${name}: Tab did not reach a native control`);
  assert.ok(focused.name, `${name}: first keyboard target has no accessible name`);
};

const writeHarness = async () => {
  await rm(validationRoot, { recursive: true, force: true });
  await mkdir(validationPages, { recursive: true });

  await writeFile(join(validationRoot, 'astro.config.mjs'), `
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  root: fileURLToPath(new URL('../', import.meta.url)),
  srcDir: fileURLToPath(new URL('./src/', import.meta.url)),
  outDir: fileURLToPath(new URL('./dist/', import.meta.url)),
  publicDir: fileURLToPath(new URL('../public/', import.meta.url)),
  cacheDir: fileURLToPath(new URL('./cache/', import.meta.url)),
  site: 'https://validation.invalid',
});
`, 'utf8');

  const sharedImports = `
import BaseLayout from '../../../src/layouts/BaseLayout.astro';
import { syntheticCompoundPublicationFixture } from '../../../src/data/compound-synthetic-fixtures';
import { adaptCompoundPublication } from '../../../src/lib/compound-publication';
import { getUi } from '../../../src/i18n/ui';

const ui = getUi('es');
const result = adaptCompoundPublication(structuredClone(syntheticCompoundPublicationFixture), 'es');
`;

  await writeFile(join(validationPages, 'index-blocked.astro'), `---
${sharedImports}
import CompoundIndexShell from '../../../src/components/compound/CompoundIndexShell.astro';
---

<BaseLayout title="Validación de índice bloqueado" description="Validación sintética local" indexable={false}>
  <CompoundIndexShell
    eyebrow={ui.compounds.eyebrow}
    title={ui.compounds.title}
    introduction={ui.compounds.introduction}
    entries={[{ id: 'test-only.synthetic-subject', href: '/must-not-render/', result }]}
    statusLabels={ui.compounds.statusLabels}
    emptyTitle={ui.compounds.emptyTitle}
    emptyDescription={ui.compounds.emptyDescription}
    pendingTitle={ui.compounds.pendingTitle}
    pendingDescription={ui.compounds.pendingDescription}
    openLabel={ui.compounds.openLabel}
  />
</BaseLayout>
`, 'utf8');

  await writeFile(join(validationPages, 'detail-blocked.astro'), `---
${sharedImports}
import CompoundDetailShell from '../../../src/components/compound/CompoundDetailShell.astro';
---

<BaseLayout title="Validación de detalle bloqueado" description="Validación sintética local" indexable={false}>
  <CompoundDetailShell
    eyebrow={ui.compounds.eyebrow}
    result={result}
    statusLabels={ui.compounds.statusLabels}
    backHref="/index-blocked/"
    backLabel={ui.compounds.backLabel}
    pendingTitle={ui.compounds.pendingTitle}
    pendingDescription={ui.compounds.pendingDescription}
    provenanceLabel={ui.compounds.provenanceLabel}
  />
</BaseLayout>
`, 'utf8');

  await run(process.execPath, [
    astroCli,
    'build',
    '--config',
    relative(appRoot, join(validationRoot, 'astro.config.mjs')),
  ]);
};

const validateProductionArtifacts = async () => {
  const compoundsHtml = await readFile(join(productionRoot, 'compounds', 'index.html'), 'utf8');
  const sitemap = await readFile(join(productionRoot, 'sitemap.xml'), 'utf8');
  assert.match(compoundsHtml, /<meta name="robots" content="noindex,nofollow">/);
  assert.match(compoundsHtml, /class="compound-index__empty" role="status"/);
  assert.doesNotMatch(sitemap, /\/compounds\//);
  await assert.rejects(access(join(productionRoot, 'en', 'compounds', 'index.html')));
  await assert.rejects(access(join(productionRoot, 'fr', 'compounds', 'index.html')));

  const htmlFiles = (await walk(productionRoot)).filter((path) => extname(path) === '.html');
  for (const path of htmlFiles) {
    const html = await readFile(path, 'utf8');
    const navigation = html.match(/<nav\b[\s\S]*?<\/nav>/g) ?? [];
    assert.equal(navigation.some((section) => /href="\/compounds\//.test(section)), false,
      `${relative(productionRoot, path)} leaks compounds into navigation`);
  }
};

let productionServer;
let harnessServer;
let browserSession;

try {
  await validateProductionArtifacts();
  console.log('PASS production compound route remains noindex, absent from sitemap/navigation, and has no silent EN/FR fallback');

  await writeHarness();
  const blockedIndexHtml = await readFile(join(validationDist, 'index-blocked', 'index.html'), 'utf8');
  const blockedDetailHtml = await readFile(join(validationDist, 'detail-blocked', 'index.html'), 'utf8');
  for (const [name, html] of [['blocked index', blockedIndexHtml], ['blocked detail', blockedDetailHtml]]) {
    assert.doesNotMatch(html, new RegExp(fixtureMarker));
    assert.doesNotMatch(html, new RegExp(fixtureDisplayName));
    assert.doesNotMatch(html, new RegExp(fixtureBody));
    assert.doesNotMatch(html, /href="\/must-not-render\//);
    assert.match(html, /noindex,nofollow/);
    console.log(`PASS ${name} fixture content and links remain fail-closed`);
  }

  productionServer = await createStaticServer(productionRoot);
  harnessServer = await createStaticServer(validationDist);
  const browserPath = await findBrowser();
  browserSession = await createBrowserSession(browserPath);
  const { client } = browserSession;

  const productionUrl = `${productionServer.origin}/compounds/`;
  await navigate(client, productionUrl, { width: 1440, height: 900, mobile: false });
  await assertDocumentStructure(client, 'production index desktop');
  assert.equal(await evaluate(client, `document.querySelector('meta[name="robots"]')?.content`), 'noindex,nofollow');
  assert.equal(await evaluate(client, `document.querySelectorAll('.compound-index__grid a').length`), 0);
  assert.equal(await evaluate(client, `document.querySelector('.compound-index__empty')?.getAttribute('role')`), 'status');
  console.log('PASS production Compound Index desktop browser and accessibility structure');

  await navigate(client, productionUrl, { width: 390, height: 844, mobile: true });
  await assertDocumentStructure(client, 'production index mobile');
  const productionMobileColumns = await evaluate(client,
    `getComputedStyle(document.querySelector('.compound-index__empty')).gridTemplateColumns.split(' ').length`);
  assert.equal(productionMobileColumns, 1, 'production index mobile empty state must collapse to one column');
  console.log('PASS production Compound Index mobile viewport without overflow or structural clipping');

  for (const locale of ['en', 'fr']) {
    await navigate(client, `${productionServer.origin}/${locale}/compounds/`, { width: 390, height: 844, mobile: true });
    assert.equal(await evaluate(client, 'document.body.textContent.trim()'), 'Not found');
  }
  console.log('PASS localized compound routes fail closed instead of silently serving Spanish');

  const blockedIndexUrl = `${harnessServer.origin}/index-blocked/`;
  await navigate(client, blockedIndexUrl, { width: 1440, height: 900, mobile: false });
  await assertDocumentStructure(client, 'blocked index desktop');
  assert.equal(await evaluate(client, `document.querySelectorAll('.compound-card__link').length`), 0);
  assert.equal(await evaluate(client, `document.body.textContent.includes(${JSON.stringify(fixtureDisplayName)})`), false);
  assert.equal(await evaluate(client, `document.body.textContent.includes(${JSON.stringify(fixtureBody)})`), false);

  await navigate(client, blockedIndexUrl, { width: 390, height: 844, mobile: true });
  await assertDocumentStructure(client, 'blocked index mobile');
  const blockedIndexColumns = await evaluate(client,
    `getComputedStyle(document.querySelector('.compound-index__grid')).gridTemplateColumns.split(' ').length`);
  assert.equal(blockedIndexColumns, 1, 'blocked index mobile grid must collapse to one column');
  console.log('PASS blocked Compound Index desktop/mobile behavior and inaccessible-link prevention');

  const blockedDetailUrl = `${harnessServer.origin}/detail-blocked/`;
  for (const viewport of [
    { name: 'desktop', width: 1440, height: 900, mobile: false },
    { name: 'mobile', width: 390, height: 844, mobile: true },
  ]) {
    await navigate(client, blockedDetailUrl, viewport);
    await assertDocumentStructure(client, `blocked detail ${viewport.name}`);
    assert.equal(await evaluate(client, `document.querySelectorAll('.compound-detail__content, .compound-detail__nav').length`), 0);
    assert.equal(await evaluate(client, `document.querySelector('.compound-detail__pending')?.getAttribute('role')`), 'status');
    assert.equal(await evaluate(client, `document.body.textContent.includes(${JSON.stringify(fixtureDisplayName)})`), false);
    assert.equal(await evaluate(client, `document.body.textContent.includes(${JSON.stringify(fixtureBody)})`), false);
  }
  console.log('PASS blocked Compound Detail desktop/mobile behavior, semantics, and content non-disclosure');

  console.log('Compound browser validation: 8/8 grouped production, fail-closed, accessibility, locale, and viewport scenarios passed.');
} finally {
  if (browserSession) {
    await browserSession.client.send('Browser.close').catch(() => {});
    browserSession.socket.close();
    await Promise.race([
      new Promise((resolvePromise) => browserSession.browser.once('exit', resolvePromise)),
      new Promise((resolvePromise) => setTimeout(resolvePromise, 2_000)),
    ]);
    if (browserSession.browser.exitCode === null) {
      browserSession.browser.kill('SIGKILL');
      await new Promise((resolvePromise) => browserSession.browser.once('exit', resolvePromise));
    }
  }
  if (productionServer) await new Promise((resolvePromise) => productionServer.server.close(resolvePromise));
  if (harnessServer) await new Promise((resolvePromise) => harnessServer.server.close(resolvePromise));
  await rm(validationRoot, { recursive: true, force: true, maxRetries: 8, retryDelay: 250 });
}
