export class Cache<T> {
  private data: Map<string, { value: T; expiry: number }> = new Map();
  private ttl: number;

  constructor(ttl: number) {
    this.ttl = ttl;
  }

  get(key: string): T | undefined {
    const item = this.data.get(key);
    if (!item) return undefined;

    if (Date.now() > item.expiry) {
      this.data.delete(key);
      return undefined;
    }

    return item.value;
  }

  set(key: string, value: T): void {
    this.data.set(key, {
      value,
      expiry: Date.now() + this.ttl,
    });
  }

  has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  delete(key: string): boolean {
    return this.data.delete(key);
  }

  clear(): void {
    this.data.clear();
  }

  prune(): void {
    const now = Date.now();
    for (const [key, item] of this.data.entries()) {
      if (now > item.expiry) {
        this.data.delete(key);
      }
    }
  }
}
