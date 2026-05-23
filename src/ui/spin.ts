export class Spinner {
  private frames = ['|', '/', '-', '\\'];
  private index = 0;
  private interval?: NodeJS.Timeout;
  private active = false;

  start(): void {
    if (this.active) return;
    this.active = true;
    this.interval = setInterval(() => {
      process.stdout.write(`\r${this.frames[this.index]}`);
      this.index = (this.index + 1) % this.frames.length;
    }, 100);
  }

  stop(): void {
    if (!this.active) return;
    this.active = false;
    if (this.interval) {
      clearInterval(this.interval);
    }
    process.stdout.write('\r');
  }
}
