import { spawn } from '../proc/spawn.js';

export async function commit(message: string): Promise<void> {
  await spawn('git', ['commit', '-m', message]);
}
