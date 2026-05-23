interface Plugin {
  name: string;
  init(): void | Promise<void>;
}

const plugins: Plugin[] = [];

export function plugin(p: Plugin): void {
  plugins.push(p);
}

export async function loadPlugins(): Promise<void> {
  for (const p of plugins) {
    await p.init();
  }
}
