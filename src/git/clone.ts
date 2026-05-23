import { spawn } from '../proc/spawn.js';

export async function clone(url: string, dir?: string): Promise<void> {
  const args = dir ? ['clone', url, dir] : ['clone', url];
  await spawn('git', args);
}
