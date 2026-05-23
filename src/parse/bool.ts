export function parse(str: string): boolean | null {
  const lower = str.toLowerCase();
  if (lower === 'true' || lower === '1' || lower === 'yes') return true;
  if (lower === 'false' || lower === '0' || lower === 'no') return false;
  return null;
}

export function safe(str: string, fallback: boolean): boolean {
  return parse(str) ?? fallback;
}
