import { writeln } from '../io/write.js';
import { time } from '../time/time.js';

export function debug(message: string): void {
  if (process.env['DEBUG']) {
    writeln(`[DEBUG] ${time()} ${message}`);
  }
}
