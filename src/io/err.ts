export function err(text: string): void {
  process.stderr.write(text);
}

export function errln(text: string): void {
  process.stderr.write(text + '\n');
}
