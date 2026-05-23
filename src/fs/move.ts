import { rename } from 'node:fs/promises';

export async function move(src: string, dest: string): Promise<void> {
  await rename(src, dest);
}
