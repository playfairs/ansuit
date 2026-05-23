#!/usr/bin/env node

import { run } from './cli/run.js';
import { parse } from './cli/parse.js';

const args = parse(process.argv.slice(2));
await run(args);
