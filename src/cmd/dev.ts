import { spawn } from '../proc/spawn.js';

export async function dev(): Promise<void> {
  await spawn('pnpm', ['run', 'dev']);
}
