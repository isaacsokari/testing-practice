#!/usr/bin/env node

const Runner = require('./runner');

const runner = new Runner();

async function run() {
  const results = await runner.collectFiles(process.cwd());
  console.log(results);
}

run();
