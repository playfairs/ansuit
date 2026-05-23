import { boot } from './core/boot.js';
import { log } from './log/log.js';

async function main(): Promise<void> {
  try {
    await boot();
  } catch (error) {
    log.error(String(error));
    process.exit(1);
  }
}

main();
