import { basename as nodeBasename } from 'node:path';

export function basename(path: string): string {
  return nodeBasename(path);
}
