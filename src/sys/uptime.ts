import { uptime as nodeUptime } from 'node:os';

export function uptime(): number {
  return nodeUptime();
}
