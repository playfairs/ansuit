export function move(x: number, y: number): void {
  process.stdout.write(`\x1b[${y};${x}H`);
}

export function up(n: number): void {
  process.stdout.write(`\x1b[${n}A`);
}

export function down(n: number): void {
  process.stdout.write(`\x1b[${n}B`);
}

export function left(n: number): void {
  process.stdout.write(`\x1b[${n}D`);
}

export function right(n: number): void {
  process.stdout.write(`\x1b[${n}C`);
}
