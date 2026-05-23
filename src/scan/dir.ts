import { readdir } from 'node:fs/promises';
import { stat } from 'node:fs/promises';
import { join } from 'node:path';

export async function dir(path: string): Promise<string[]> {
  const entries = await readdir(path);
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = join(path, entry);
    const stats = await stat(fullPath);
    if (stats.isDirectory()) {
      files.push(...(await dir(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}
