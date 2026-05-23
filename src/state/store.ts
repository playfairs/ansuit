export class Store<T> {
  private state: T;

  constructor(initial: T) {
    this.state = initial;
  }

  get(): T {
    return this.state;
  }

  set(value: T): void {
    this.state = value;
  }

  update(fn: (state: T) => T): void {
    this.state = fn(this.state);
  }
}
