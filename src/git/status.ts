import { spawn } from '../proc/spawn.js';

export async function status(): Promise<string> {
  const result = await spawn('git', ['status']);
  return result.stdout;
}
