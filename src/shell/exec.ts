import { spawn } from '../proc/spawn.js';

export async function exec(cmd: string): Promise<void> {
  await spawn('sh', ['-c', cmd]);
}
