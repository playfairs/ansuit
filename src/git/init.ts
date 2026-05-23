import { spawn } from '../proc/spawn.js';

export async function init(): Promise<void> {
  await spawn('git', ['init']);
}
