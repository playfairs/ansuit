import { spawn } from '../proc/spawn.js';

export async function test(): Promise<void> {
  await spawn('pnpm', ['run', 'test']);
}
