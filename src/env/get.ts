export function get(key: string): string | undefined {
  return process.env[key];
}

export function getOr(key: string, fallback: string): string {
  return process.env[key] || fallback;
}

export function require(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`env ${key} is required`);
  return value;
}
