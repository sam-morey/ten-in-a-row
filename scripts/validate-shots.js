#!/usr/bin/env node
/* Validates shots.js so a malformed day can't silently break the site.
   Runs in CI on every push (see .github/workflows/validate.yml) and can
   be run locally with:  node scripts/validate-shots.js
   Exits 0 if the shot log is well-formed, 1 (with a reason) otherwise. */

const path = require('path');

let SHOTS;
try {
  ({ SHOTS } = require(path.join(__dirname, '..', 'shots.js')));
} catch (err) {
  console.error('✗ Could not load shots.js:', err.message);
  process.exit(1);
}

function validate(shots) {
  if (!Array.isArray(shots) || shots.length === 0) {
    return 'SHOTS is missing or empty.';
  }
  let prevDate = null;
  for (let i = 0; i < shots.length; i++) {
    const s = shots[i];
    const where = `day ${s && s.day !== undefined ? s.day : '(index ' + i + ')'}`;

    if (typeof s !== 'object' || s === null) {
      return `${where}: entry is not an object.`;
    }
    for (const key of ['day', 'date', 'result', 'note']) {
      if (!(key in s)) return `${where}: missing "${key}" field.`;
    }
    if (!Number.isInteger(s.day)) {
      return `${where}: "day" must be an integer.`;
    }
    if (s.day !== i + 1) {
      return `${where}: days must run 1,2,3… with no gaps or duplicates (expected ${i + 1}).`;
    }
    if (s.result !== 'make' && s.result !== 'miss') {
      return `${where}: result must be "make" or "miss" (got "${s.result}").`;
    }
    if (typeof s.note !== 'string') {
      return `${where}: "note" must be a string ("" if none).`;
    }
    const d = new Date(s.date);
    if (isNaN(d.getTime())) {
      return `${where}: date "${s.date}" is not a valid date.`;
    }
    if (prevDate && d < prevDate) {
      return `${where}: date "${s.date}" is earlier than the previous day.`;
    }
    prevDate = d;
  }
  return null;
}

const error = validate(SHOTS);
if (error) {
  console.error('✗ Shot log is invalid: ' + error);
  process.exit(1);
}

const makes = SHOTS.filter(s => s.result === 'make').length;
const pct = Math.round((makes / SHOTS.length) * 100);
console.log(`✓ Shot log OK — ${SHOTS.length} days, ${makes} makes (${pct}%).`);
