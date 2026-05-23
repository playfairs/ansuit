import { mkdir as nodeMkdir } from 'node:fs/promises';

export async function mkdir(path: string): Promise<void> {
  await nodeMkdir(path, { recursive: true });
}
