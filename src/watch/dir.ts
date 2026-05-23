import { watch as nodeWatch } from 'node:fs/promises';

export async function dir(path: string, fn: () => void): Promise<void> {
  const watcher = await nodeWatch(path, { recursive: true });
  for await (const _event of watcher) {
    fn();
  }
}
