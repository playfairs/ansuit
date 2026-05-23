export function stringify(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

export function compact(value: unknown): string {
  return JSON.stringify(value);
}
