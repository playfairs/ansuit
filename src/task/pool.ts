export class Pool {
  private workers: Array<() => Promise<void>> = [];
  private concurrency: number;
  private active = 0;

  constructor(concurrency: number) {
    this.concurrency = concurrency;
  }

  add(worker: () => Promise<void>): void {
    this.workers.push(worker);
    this.process();
  }

  private async process(): Promise<void> {
    if (this.active >= this.concurrency || this.workers.length === 0) return;

    this.active++;
    const worker = this.workers.shift();
    if (worker) {
      await worker();
    }
    this.active--;
    this.process();
  }

  size(): number {
    return this.workers.length;
  }
}
