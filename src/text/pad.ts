export function padLeft(str: string, len: number, char = ' '): string {
  return str.padStart(len, char);
}

export function padRight(str: string, len: number, char = ' '): string {
  return str.padEnd(len, char);
}
