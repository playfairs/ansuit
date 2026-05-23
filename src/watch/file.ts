import { watch as nodeWatch } from 'node:fs/promises';

export async function file(path: string, fn: () => void): Promise<void> {
  const watcher = await nodeWatch(path);
  for await (const _event of watcher) {
    fn();
  }
}
