interface Context {
  cwd: string;
  env: Record<string, string | undefined>;
  args: string[];
}

let context: Context | null = null;

export function ctx(): Context {
  if (!context) {
    context = {
      cwd: process.cwd(),
      env: process.env,
      args: process.argv.slice(2),
    };
  }
  return context;
}

export function setCtx(newCtx: Partial<Context>): void {
  context = { ...ctx(), ...newCtx };
}
