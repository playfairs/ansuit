export class List<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  shift(): T | undefined {
    return this.items.shift();
  }

  unshift(item: T): void {
    this.items.unshift(item);
  }

  get(index: number): T | undefined {
    return this.items[index];
  }

  set(index: number, value: T): void {
    this.items[index] = value;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  toArray(): T[] {
    return [...this.items];
  }
}
