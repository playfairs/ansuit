import { spawn } from '../proc/spawn.js';

export async function add(files: string[]): Promise<void> {
  await spawn('git', ['add', ...files]);
}
