import { writeFile } from 'node:fs/promises';

export async function write(path: string, content: string): Promise<void> {
  await writeFile(path, content, 'utf-8');
}
