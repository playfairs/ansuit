export function cast<T>(value: unknown): T {
  return value as T;
}

export function assert<T>(value: unknown): asserts value is T {
  if (!value) {
    throw new Error('Assertion failed');
  }
}
