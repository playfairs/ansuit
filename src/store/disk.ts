import { read } from '../fs/read.js';
import { write } from '../fs/write.js';
import { parse } from '../json/parse.js';
import { stringify } from '../json/stringify.js';

export class Disk<T> {
  constructor(private path: string) {}

  async get(): Promise<T | null> {
    try {
      const content = await read(this.path);
      return parse(content) as T;
    } catch {
      return null;
    }
  }

  async set(value: T): Promise<void> {
    const content = stringify(value);
    await write(this.path, content);
  }

  async clear(): Promise<void> {
    await write(this.path, '{}');
  }
}
