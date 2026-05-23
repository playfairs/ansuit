import { init } from '../app/init.js';
import { load } from './load.js';
import { log } from '../log/log.js';

export async function boot(): Promise<void> {
  log.info('booting...');
  await load();
  await init();
  log.info('ready');
}
