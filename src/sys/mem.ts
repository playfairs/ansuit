import { totalmem, freemem } from 'node:os';

export function total(): number {
  return totalmem();
}

export function free(): number {
  return freemem();
}

export function used(): number {
  return totalmem() - freemem();
}
