import { spawn } from '../proc/spawn.js';

export async function push(remote?: string, branch?: string): Promise<void> {
  const args = remote && branch ? ['push', remote, branch] : ['push'];
  await spawn('git', args);
}
