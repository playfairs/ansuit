import { spawn } from '../proc/spawn.js';

export async function exec(cmd: string, args: string[]): Promise<void> {
  await spawn(cmd, args);
}
