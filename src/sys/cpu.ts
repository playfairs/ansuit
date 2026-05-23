import { cpus } from 'node:os';

export function cpu(): ReturnType<typeof cpus> {
  return cpus();
}

export function cores(): number {
  return cpus().length;
}
