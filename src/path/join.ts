import { join } from 'node:path';

export function path(...segments: string[]): string {
  return join(...segments);
}
