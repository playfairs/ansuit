export function parse(text: string): unknown {
  return JSON.parse(text);
}

export function safe(text: string): unknown | null {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}
