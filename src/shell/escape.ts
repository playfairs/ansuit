export function escape(str: string): string {
  return str.replace(/'/g, "'\\''");
}

export function quote(str: string): string {
  return `'${escape(str)}'`;
}
