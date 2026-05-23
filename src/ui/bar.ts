export class Bar {
  private width: number;
  private current = 0;
  private total: number;

  constructor(total: number, width = 40) {
    this.total = total;
    this.width = width;
  }

  update(current: number): void {
    this.current = current;
    this.render();
  }

  render(): void {
    const progress = this.current / this.total;
    const filled = Math.floor(progress * this.width);
    const empty = this.width - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);
    const percent = Math.floor(progress * 100);
    process.stdout.write(`\r[${bar}] ${percent}%`);
  }

  complete(): void {
    this.update(this.total);
    process.stdout.write('\n');
  }
}
