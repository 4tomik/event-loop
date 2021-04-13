#!/usr/bin/env node

const path = require('path')

const chapters = [
  'stack',
  'timeout',
  'block',
  'arrays',
  'arrays-timeout',
  'tasks',
  'request',
  'micro',
  'micro-render',
  'req-promise',
];

const convert = (i) => path.join(__dirname, `${chapters[i]}.html`);

if (process.argv.length >= 3) {
  const i = process.argv[2];
  if (isNaN(i) || i < 0 || i >= chapters.length) {
    process.exit(1);
  }
  const n = Number(i);
  if (!Number.isInteger(n)) {
    process.exit(1);
  }
  console.log(convert(Number(i)));
} else {
  for (let i in chapters) {
    console.log(`[${i}] => ${convert(i)}`);
  }
}
