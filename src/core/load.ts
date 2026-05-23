import { env } from '../env/env.js';
import { config } from './config.js';

export async function load(): Promise<void> {
  env.load();
  await config.load();
}
