type Hook = () => void | Promise<void>;

const hooks: Map<string, Hook[]> = new Map();

export function on(event: string, hook: Hook): void {
  const existing = hooks.get(event) || [];
  hooks.set(event, [...existing, hook]);
}

export async function emit(event: string): Promise<void> {
  const eventHooks = hooks.get(event) || [];
  for (const hook of eventHooks) {
    await hook();
  }
}
