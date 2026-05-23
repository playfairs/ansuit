import { extname } from 'node:path';

export function ext(path: string): string {
  return extname(path);
}
