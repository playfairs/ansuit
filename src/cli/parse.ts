import type { Args } from './args.js';

export function parse(argv: string[]): Args {
  const args: Args = {
    _: [],
    flags: {},
    options: {},
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (!arg) continue;
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('-')) {
        args.options[key] = next;
        i++;
      } else {
        args.flags[key] = true;
      }
    } else if (arg.startsWith('-')) {
      args.flags[arg.slice(1)] = true;
    } else {
      args._.push(arg);
    }
  }

  return args;
}
