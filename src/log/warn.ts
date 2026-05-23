import { writeln } from '../io/write.js';
import { time } from '../time/time.js';

export function warn(message: string): void {
  writeln(`[WARN] ${time()} ${message}`);
}
