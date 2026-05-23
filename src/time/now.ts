export function now(): number {
  return Date.now();
}

export function sec(): number {
  return Math.floor(Date.now() / 1000);
}

export function ms(): number {
  return Date.now();
}
