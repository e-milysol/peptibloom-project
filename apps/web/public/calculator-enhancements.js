const calculatorForm = document.querySelector('#concentration-calculator');

if (calculatorForm instanceof HTMLFormElement) {
  const getControl = (selector) => document.querySelector(selector);
  const vialAmountInput = getControl('#vial-amount');
  const vialUnitInput = getControl('#vial-unit');
  const targetAmountInput = getControl('#target-amount');
  const targetUnitInput = getControl('#target-unit');
  const syringeScaleInput = getControl('#syringe-scale');
  const customUnitsInput = getControl('#custom-units');
  const syringeCapacityInput = getControl('#syringe-capacity');
  const legacyVisual = document.querySelector('.syringe-visual');

  const numberFormat = new Intl.NumberFormat('en-US', { maximumFractionDigits: 4 });
  const shortFormat = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 });

  const readNumber = (element) => {
    if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) return Number.NaN;
    return Number.parseFloat(element.value);
  };

  const readValue = (element) => {
    if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) return '';
    return element.value;
  };

  const toMg = (value, unit) => unit === 'mcg' ? value / 1000 : value;

  const unitsPerMl = () => {
    const scaleValue = readValue(syringeScaleInput);
    return scaleValue === 'custom' ? readNumber(customUnitsInput) : Number.parseFloat(scaleValue);
  };

  const buildSyringe = () => {
    if (!(legacyVisual instanceof HTMLElement)) return null;

    legacyVisual.innerHTML = `
      <div class="syringe-card" aria-hidden="true">
        <div class="syringe-illustration">
          <div class="syringe-plunger"><span></span></div>
          <div class="syringe-barrel">
            <div class="syringe-liquid" id="enhanced-syringe-fill"></div>
            <div class="syringe-scale-marks">
              ${Array.from({ length: 21 }, (_, index) => `<span class="${index % 5 === 0 ? 'major' : ''}"></span>`).join('')}
            </div>
            <div class="syringe-marker" id="enhanced-syringe-marker"></div>
          </div>
          <div class="syringe-hub"></div>
          <div class="syringe-needle"></div>
        </div>
        <div class="syringe-readout">
          <span id="enhanced-syringe-units">— units</span>
          <span id="enhanced-syringe-volume">— mL</span>
        </div>
        <div class="syringe-capacity-row">
          <span>0</span>
          <span id="enhanced-syringe-capacity">1 mL capacity</span>
        </div>
      </div>
    `;

    return {
      fill: document.querySelector('#enhanced-syringe-fill'),
      marker: document.querySelector('#enhanced-syringe-marker'),
      units: document.querySelector('#enhanced-syringe-units'),
      volume: document.querySelector('#enhanced-syringe-volume'),
      capacity: document.querySelector('#enhanced-syringe-capacity'),
    };
  };

  const syringe = buildSyringe();

  const updateSyringe = () => {
    if (!syringe) return;

    const vialAmount = readNumber(vialAmountInput);
    const targetAmount = readNumber(targetAmountInput);
    const finalVolume = readNumber(getControl('#final-volume'));
    const syringeCapacity = readNumber(syringeCapacityInput);
    const scale = unitsPerMl();

    if (![vialAmount, targetAmount, finalVolume, syringeCapacity, scale].every((value) => Number.isFinite(value) && value > 0)) {
      if (syringe.fill instanceof HTMLElement) syringe.fill.style.width = '0%';
      if (syringe.marker instanceof HTMLElement) syringe.marker.style.left = '0%';
      if (syringe.units) syringe.units.textContent = '— units';
      if (syringe.volume) syringe.volume.textContent = '— mL';
      if (syringe.capacity) syringe.capacity.textContent = `${Number.isFinite(syringeCapacity) ? shortFormat.format(syringeCapacity) : '1'} mL capacity`;
      return;
    }

    const vialMg = toMg(vialAmount, readValue(vialUnitInput));
    const targetMg = toMg(targetAmount, readValue(targetUnitInput));
    const concentration = vialMg / finalVolume;
    const targetVolume = targetMg / concentration;
    const units = targetVolume * scale;
    const percentage = Math.max(0, Math.min(100, (targetVolume / syringeCapacity) * 100));

    if (syringe.fill instanceof HTMLElement) syringe.fill.style.width = `${percentage}%`;
    if (syringe.marker instanceof HTMLElement) syringe.marker.style.left = `${percentage}%`;
    if (syringe.units) syringe.units.textContent = `${numberFormat.format(units)} units`;
    if (syringe.volume) syringe.volume.textContent = `${numberFormat.format(targetVolume)} mL`;
    if (syringe.capacity) syringe.capacity.textContent = `${shortFormat.format(syringeCapacity)} mL capacity`;
  };

  const createCompareSection = () => {
    const quickSection = calculatorForm.closest('section');
    if (!(quickSection instanceof HTMLElement) || !quickSection.parentElement) return null;

    const compareSection = document.createElement('section');
    compareSection.className = 'section calculator-compare-section';
    compareSection.setAttribute('aria-labelledby', 'compare-dilutions-title');
    compareSection.innerHTML = `
      <div class="site-frame compare-layout">
        <div class="compare-copy">
          <p class="eyebrow">Compare final volumes</p>
          <h2 id="compare-dilutions-title">See how concentration changes without choosing a protocol for you.</h2>
          <p class="section-lead">
            Reuse the vial amount, entered amount and syringe scale from the quick calculator, then compare several hypothetical final volumes side by side.
          </p>
          <p class="calculator-note">
            These rows are mathematical scenarios only. The tool does not determine whether any final volume is appropriate for a product, container or person.
          </p>
        </div>

        <div class="compare-panel">
          <label class="compare-field" for="compare-volumes">
            <span>Final volumes to compare (mL)</span>
            <input id="compare-volumes" type="text" inputmode="decimal" value="1, 2, 2.5, 3" autocomplete="off" />
          </label>
          <div class="compare-actions">
            <button id="compare-button" class="button button--primary" type="button">Compare</button>
          </div>
          <div id="compare-message" class="calculator-message" role="status" aria-live="polite">
            Enter up to eight positive final volumes separated by commas.
          </div>
          <div class="compare-table-wrap" tabindex="0" aria-label="Dilution comparison table" hidden>
            <table class="compare-table">
              <thead>
                <tr>
                  <th scope="col">Final volume</th>
                  <th scope="col">Concentration</th>
                  <th scope="col">Volume for entered amount</th>
                  <th scope="col">Syringe position</th>
                </tr>
              </thead>
              <tbody id="compare-body"></tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    quickSection.insertAdjacentElement('afterend', compareSection);

    return {
      section: compareSection,
      volumes: compareSection.querySelector('#compare-volumes'),
      button: compareSection.querySelector('#compare-button'),
      message: compareSection.querySelector('#compare-message'),
      tableWrap: compareSection.querySelector('.compare-table-wrap'),
      body: compareSection.querySelector('#compare-body'),
    };
  };

  const compare = createCompareSection();

  const runComparison = () => {
    if (!compare) return;

    const vialAmount = readNumber(vialAmountInput);
    const targetAmount = readNumber(targetAmountInput);
    const scale = unitsPerMl();
    const capacity = readNumber(syringeCapacityInput);
    const vialUnit = readValue(vialUnitInput);
    const targetUnit = readValue(targetUnitInput);

    if (![vialAmount, targetAmount, scale, capacity].every((value) => Number.isFinite(value) && value > 0)) {
      if (compare.message) compare.message.textContent = 'Complete vial content, entered amount, syringe scale and syringe capacity in the quick calculator first.';
      if (compare.tableWrap instanceof HTMLElement) compare.tableWrap.hidden = true;
      return;
    }

    if (!(compare.volumes instanceof HTMLInputElement)) return;
    const volumes = compare.volumes.value
      .split(/[;,\s]+/)
      .map((value) => Number.parseFloat(value))
      .filter((value) => Number.isFinite(value) && value > 0)
      .slice(0, 8);

    const uniqueVolumes = [...new Set(volumes)];
    if (uniqueVolumes.length === 0) {
      if (compare.message) compare.message.textContent = 'Enter at least one positive final volume in mL.';
      if (compare.tableWrap instanceof HTMLElement) compare.tableWrap.hidden = true;
      return;
    }

    const vialMg = toMg(vialAmount, vialUnit);
    const targetMg = toMg(targetAmount, targetUnit);

    if (targetMg > vialMg) {
      if (compare.message) compare.message.textContent = 'The entered amount exceeds the total vial content, so comparison is not meaningful.';
      if (compare.tableWrap instanceof HTMLElement) compare.tableWrap.hidden = true;
      return;
    }

    if (!(compare.body instanceof HTMLElement)) return;
    compare.body.innerHTML = '';

    uniqueVolumes.forEach((finalVolume) => {
      const concentration = vialMg / finalVolume;
      const targetVolume = targetMg / concentration;
      const units = targetVolume * scale;
      const exceedsCapacity = targetVolume > capacity;

      const row = document.createElement('tr');
      row.innerHTML = `
        <td><strong>${numberFormat.format(finalVolume)} mL</strong></td>
        <td>${numberFormat.format(concentration)} mg/mL<br><span>${numberFormat.format(concentration * 1000)} µg/mL</span></td>
        <td>${numberFormat.format(targetVolume)} mL${exceedsCapacity ? '<br><span class="compare-warning">Exceeds selected syringe capacity</span>' : ''}</td>
        <td>${numberFormat.format(units)} units</td>
      `;
      compare.body.appendChild(row);
    });

    if (compare.message) {
      compare.message.textContent = `${uniqueVolumes.length} mathematical scenario${uniqueVolumes.length === 1 ? '' : 's'} compared using the values currently entered above.`;
    }
    if (compare.tableWrap instanceof HTMLElement) compare.tableWrap.hidden = false;
  };

  compare?.button?.addEventListener('click', runComparison);

  calculatorForm.addEventListener('submit', () => {
    window.setTimeout(updateSyringe, 0);
  });

  calculatorForm.addEventListener('reset', () => {
    window.setTimeout(() => {
      updateSyringe();
      if (compare?.tableWrap instanceof HTMLElement) compare.tableWrap.hidden = true;
      if (compare?.message) compare.message.textContent = 'Enter up to eight positive final volumes separated by commas.';
    }, 0);
  });

  [vialAmountInput, vialUnitInput, targetAmountInput, targetUnitInput, syringeScaleInput, customUnitsInput, syringeCapacityInput, getControl('#final-volume')]
    .filter(Boolean)
    .forEach((control) => control.addEventListener('input', updateSyringe));

  updateSyringe();
}
