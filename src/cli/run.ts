import { exec } from './exec.js';
import type { Args } from './args.js';

export async function run(args: Args): Promise<void> {
  await exec(args);
}
