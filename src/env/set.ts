export function set(key: string, value: string): void {
  process.env[key] = value;
}

export function unset(key: string): void {
  delete process.env[key];
}
