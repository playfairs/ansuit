import { errln } from '../io/err.js';
import { time } from '../time/time.js';

export function error(message: string): void {
  errln(`[ERROR] ${time()} ${message}`);
}
