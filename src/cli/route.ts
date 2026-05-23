import type { Args } from './args.js';

type Handler = (args: Args) => Promise<void>;

const routes: Map<string, Handler> = new Map();

export function route(cmd: string | undefined): Handler | undefined {
  if (!cmd) return undefined;
  return routes.get(cmd);
}

export function register(name: string, handler: Handler): void {
  routes.set(name, handler);
}
