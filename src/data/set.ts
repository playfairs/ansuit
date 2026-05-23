export class SetClass<T> {
  private inner: globalThis.Set<T> = new globalThis.Set();

  add(value: T): void {
    this.inner.add(value);
  }

  has(value: T): boolean {
    return this.inner.has(value);
  }

  delete(value: T): boolean {
    return this.inner.delete(value);
  }

  clear(): void {
    this.inner.clear();
  }

  size(): number {
    return this.inner.size;
  }

  values(): T[] {
    return Array.from(this.inner.values());
  }
}
