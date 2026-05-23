import { writeln } from '../io/write.js';
import { time } from '../time/time.js';

export function info(message: string): void {
  writeln(`[INFO] ${time()} ${message}`);
}
