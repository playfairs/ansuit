export class Chain<T> {
  private steps: Array<(value: T) => Promise<T>> = [];

  add(step: (value: T) => Promise<T>): this {
    this.steps.push(step);
    return this;
  }

  async exec(value: T): Promise<T> {
    let result = value;
    for (const step of this.steps) {
      result = await step(result);
    }
    return result;
  }
}
