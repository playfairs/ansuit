export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function sleep(sec: number): Promise<void> {
  return wait(sec * 1000);
}
