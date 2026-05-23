export function time(): string {
  return new Date().toISOString();
}

export function iso(): string {
  return new Date().toISOString();
}

export function utc(): string {
  return new Date().toUTCString();
}
