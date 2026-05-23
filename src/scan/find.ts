import { readdir } from 'node:fs/promises';
import { stat } from 'node:fs/promises';
import { join } from 'node:path';

export async function find(path: string, name: string): Promise<string | null> {
  const entries = await readdir(path);

  for (const entry of entries) {
    const fullPath = join(path, entry);
    const stats = await stat(fullPath);

    if (entry === name && stats.isFile()) {
      return fullPath;
    }

    if (stats.isDirectory()) {
      const found = await find(fullPath, name);
      if (found) return found;
    }
  }

  return null;
}
