export function parse(url: string): URL {
  return new URL(url);
}

export function join(base: string, path: string): string {
  return new URL(path, base).toString();
}
