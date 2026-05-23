import { readFile } from 'node:fs/promises';

export async function read(path: string): Promise<string> {
  return await readFile(path, 'utf-8');
}
