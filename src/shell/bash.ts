import { spawn } from '../proc/spawn.js';

export async function bash(cmd: string): Promise<void> {
  await spawn('bash', ['-c', cmd]);
}
