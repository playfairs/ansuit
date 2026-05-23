export class Scheduler {
  private tasks: Map<number, () => void> = new Map();
  private nextId = 0;

  schedule(fn: () => void, delay: number): number {
    const id = this.nextId++;
    setTimeout(() => {
      fn();
      this.tasks.delete(id);
    }, delay);
    this.tasks.set(id, fn);
    return id;
  }

  cancel(id: number): boolean {
    return this.tasks.delete(id);
  }

  clear(): void {
    this.tasks.clear();
  }
}
