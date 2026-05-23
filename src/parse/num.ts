export function parse(str: string): number | null {
  const num = Number(str);
  return Number.isNaN(num) ? null : num;
}

export function safe(str: string, fallback: number): number {
  return parse(str) ?? fallback;
}
