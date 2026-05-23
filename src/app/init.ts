import { load } from '../core/load.js';
import { env } from '../env/env.js';

export async function init(): Promise<void> {
  await load();
  env.load();
}
