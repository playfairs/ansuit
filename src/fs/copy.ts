import { copyFile } from 'node:fs/promises';

export async function copy(src: string, dest: string): Promise<void> {
  await copyFile(src, dest);
}
