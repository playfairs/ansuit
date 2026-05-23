import { kill as nodeKill } from 'node:process';

export function kill(pid: number, signal?: NodeJS.Signals): void {
  nodeKill(pid, signal);
}
