export function flow<T>(...fns: Array<(value: T) => T>): (value: T) => T {
  return (value: T) => {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
}

export function flowAsync<T>(...fns: Array<(value: T) => Promise<T>>): (value: T) => Promise<T> {
  return async (value: T) => {
    let result = value;
    for (const fn of fns) {
      result = await fn(result);
    }
    return result;
  };
}
