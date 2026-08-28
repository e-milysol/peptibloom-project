# PB-EVIDENCE-EDITORIAL-DERIVATIVE-PRODUCTION-CHECKLIST v0.1

**STATUS: DRAFT / PROCESS CONTROL**

Use this checklist for every Bloom/Eviden expression or pose derivative produced from the frozen editorial masters.

## Pre-generation

- Verify the exact source binary against the frozen registry filename, dimensions and SHA-256.
- Confirm source master is Bloom Editorial v1.0 or Eviden Editorial v1.0.
- Select exactly one expression ID and one pose ID from `PB-EVIDENCE-EDITORIAL-EXPRESSION-POSE-LIBRARY-v0.1.md`.
- Record intended communication state.
- Default to restrained editorial acting (`L1–L2`).
- Do not add props, accessories, logos, scientific badges or medical symbolism unless separately authorized.

## Generation/edit instruction boundary

Change only:

- facial expression required by the selected expression ID;
- body/hand posture required by the selected pose ID;
- natural secondary motion needed to support the pose, such as slight hair displacement or garment fold changes.

Preserve:

- person identity;
- apparent age;
- face anatomy;
- hair identity;
- wardrobe design and color relationships;
- body proportions;
- rendering style/material language.

## Review pass A — identity

- Same person at first glance.
- No face morphing or beautification drift.
- No age shift.
- No body/proportion shift.
- No hairstyle redesign.
- No wardrobe redesign/recolor.

Failure in any identity item = reject candidate before pose/expression review.

## Review pass B — acting state

- Expression matches selected ID.
- Pose matches selected ID.
- Gesture reads without caption.
- Gesture is restrained enough for editorial/scientific communication.
- Hands/anatomy are coherent.
- Character does not read as sales, influencer, clinical authority, superhero, flirtatious or alarmist.

## Review pass C — governance

- No scientific claim introduced visually.
- No Evidence status implied by pose/color/prop.
- No medical instruction implied.
- No new accessory or prop silently becomes canon.
- No derivative becomes a substitute master.

## Output record

For every retained candidate record:

- source master Asset ID;
- source master SHA-256;
- expression ID;
- pose ID;
- revision (`rNN`);
- output filename;
- output dimensions/mode;
- output SHA-256 after final export;
- review result: `REJECTED`, `CANDIDATE`, or `APPROVED_DERIVATIVE`;
- short rejection/approval note.

## Round 1 completion gate

Do not expand beyond Round 1 until:

- all neutral/default candidates pass identity review;
- at least one active gesture per character passes identity + acting review;
- at least one thoughtful/caution/analysis state per character passes identity + acting review;
- repeated generations show no material identity drift.

Only then may a second derivative-production round be proposed.
