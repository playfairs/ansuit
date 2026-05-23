import { spawn } from '../proc/spawn.js';

export async function checkout(branch: string): Promise<void> {
  await spawn('git', ['checkout', branch]);
}

export async function createBranch(branch: string): Promise<void> {
  await spawn('git', ['checkout', '-b', branch]);
}
