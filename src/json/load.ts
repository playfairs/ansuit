import { read } from '../fs/read.js';
import { parse } from './parse.js';

export async function load(path: string): Promise<unknown> {
  const content = await read(path);
  return parse(content);
}
