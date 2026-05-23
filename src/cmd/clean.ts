import { rm } from '../fs/rm.js';

export async function clean(): Promise<void> {
  await rm('./dist');
  await rm('./coverage');
}
