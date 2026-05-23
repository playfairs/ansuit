import { write } from '../fs/write.js';
import { stringify } from './stringify.js';

export async function save(path: string, value: unknown): Promise<void> {
  const content = stringify(value);
  await write(path, content);
}
