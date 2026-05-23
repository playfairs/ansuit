let counter = 0;

export function id(): number {
  return ++counter;
}

export function uuid(): string {
  return crypto.randomUUID();
}
