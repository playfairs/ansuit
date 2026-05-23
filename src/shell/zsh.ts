import { spawn } from '../proc/spawn.js';

export async function zsh(cmd: string): Promise<void> {
  await spawn('zsh', ['-c', cmd]);
}
