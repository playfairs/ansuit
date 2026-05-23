export function split(str: string, sep: string): string[] {
  return str.split(sep);
}

export function lines(str: string): string[] {
  return str.split('\n');
}

export function words(str: string): string[] {
  return str.split(/\s+/).filter(Boolean);
}
