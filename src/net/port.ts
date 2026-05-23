export function isPortAvailable(port: number): boolean {
  return port > 0 && port < 65536;
}

export function parsePort(str: string): number | null {
  const port = parseInt(str, 10);
  return isPortAvailable(port) ? port : null;
}
