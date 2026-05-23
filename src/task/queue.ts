export class TaskQueue {
  private queue: Array<() => Promise<void>> = [];
  private running = false;

  add(task: () => Promise<void>): void {
    this.queue.push(task);
    this.process();
  }

  private async process(): Promise<void> {
    if (this.running || this.queue.length === 0) return;

    this.running = true;
    while (this.queue.length > 0) {
      const task = this.queue.shift();
      if (task) {
        await task();
      }
    }
    this.running = false;
  }

  size(): number {
    return this.queue.length;
  }
}
