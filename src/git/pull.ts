import { spawn } from '../proc/spawn.js';

export async function pull(): Promise<void> {
  await spawn('git', ['pull']);
}
