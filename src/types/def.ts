export function def<T>(value: T | undefined | null, fallback: T): T {
  return value ?? fallback;
}

export function or<T>(...values: Array<T | undefined | null>): T | undefined {
  return values.find((v) => v !== undefined && v !== null);
}
