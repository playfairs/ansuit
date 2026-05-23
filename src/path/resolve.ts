import { resolve as nodeResolve } from 'node:path';

export function resolve(...segments: string[]): string {
  return nodeResolve(...segments);
}
