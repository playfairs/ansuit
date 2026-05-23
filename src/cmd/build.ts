import { spawn } from '../proc/spawn.js';

export async function build(): Promise<void> {
  await spawn('pnpm', ['run', 'build']);
}
