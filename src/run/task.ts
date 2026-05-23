import { spawn } from '../proc/spawn.js';

export async function task(cmd: string): Promise<void> {
  await spawn('sh', ['-c', cmd]);
}
