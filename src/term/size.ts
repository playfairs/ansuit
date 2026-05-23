import { stdout } from 'node:process';

export function cols(): number {
  return stdout.columns || 80;
}

export function rows(): number {
  return stdout.rows || 24;
}

export function size(): { cols: number; rows: number } {
  return { cols: cols(), rows: rows() };
}
