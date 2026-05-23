import { stat as nodeStat } from 'node:fs/promises';

export async function stat(path: string) {
  return await nodeStat(path);
}
