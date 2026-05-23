export function write(text: string): void {
  process.stdout.write(text);
}

export function writeln(text: string): void {
  process.stdout.write(text + '\n');
}
