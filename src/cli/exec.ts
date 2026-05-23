import { route } from './route.js';
import type { Args } from './args.js';

export async function exec(args: Args): Promise<void> {
  const handler = route(args._[0]);
  if (handler) {
    await handler(args);
  } else {
    console.log('Unknown command');
  }
}
