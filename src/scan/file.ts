import { readdir } from 'node:fs/promises';
import { stat } from 'node:fs/promises';
import { join } from 'node:path';

export async function file(path: string, pattern: RegExp): Promise<string[]> {
  const entries = await readdir(path);
  const matches: string[] = [];

  for (const entry of entries) {
    const fullPath = join(path, entry);
    const stats = await stat(fullPath);
    if (stats.isDirectory()) {
      matches.push(...(await file(fullPath, pattern)));
    } else if (pattern.test(entry)) {
      matches.push(fullPath);
    }
  }

  return matches;
}
