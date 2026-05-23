export function clone<T>(value: T): T {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value.getTime()) as T;
  }

  if (value instanceof Array) {
    return value.map((item) => clone(item)) as T;
  }

  if (typeof value === 'object') {
    const copy = {} as T;
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        copy[key] = clone(value[key]);
      }
    }
    return copy;
  }

  return value;
}
