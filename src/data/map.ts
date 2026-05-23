export class MapClass<K, V> {
  private inner: globalThis.Map<K, V> = new globalThis.Map();

  set(key: K, value: V): void {
    this.inner.set(key, value);
  }

  get(key: K): V | undefined {
    return this.inner.get(key);
  }

  has(key: K): boolean {
    return this.inner.has(key);
  }

  delete(key: K): boolean {
    return this.inner.delete(key);
  }

  clear(): void {
    this.inner.clear();
  }

  size(): number {
    return this.inner.size;
  }

  keys(): K[] {
    return Array.from(this.inner.keys());
  }

  values(): V[] {
    return Array.from(this.inner.values());
  }

  entries(): [K, V][] {
    return Array.from(this.inner.entries());
  }
}
