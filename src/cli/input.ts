import { read } from '../io/read.js';

export async function input(prompt: string): Promise<string> {
  process.stdout.write(prompt);
  return await read();
}
