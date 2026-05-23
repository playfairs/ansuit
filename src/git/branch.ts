import { spawn } from '../proc/spawn.js';

export async function branch(name: string): Promise<void> {
  await spawn('git', ['branch', name]);
}

export async function listBranches(): Promise<string> {
  const result = await spawn('git', ['branch', '-a']);
  return result.stdout;
}
