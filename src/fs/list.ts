import { readdir } from 'node:fs/promises';

export async function list(path: string): Promise<string[]> {
  return await readdir(path);
}
