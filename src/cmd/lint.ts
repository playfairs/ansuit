import { spawn } from '../proc/spawn.js';

export async function lint(): Promise<void> {
  await spawn('pnpm', ['run', 'lint']);
}
