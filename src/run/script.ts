import { read } from '../fs/read.js';
import { exec } from './exec.js';

export async function script(path: string): Promise<void> {
  const content = await read(path);
  const lines = content.split('\n').filter((line) => line.trim());
  for (const line of lines) {
    const [cmd, ...args] = line.split(' ');
    if (cmd) {
      await exec(cmd, args);
    }
  }
}
