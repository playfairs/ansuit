import { rm as nodeRm } from 'node:fs/promises';

export async function rm(path: string): Promise<void> {
  await nodeRm(path, { recursive: true, force: true });
}
