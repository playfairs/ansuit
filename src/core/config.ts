import { read } from '../fs/read.js';
import { parse } from '../json/parse.js';
import { validate } from './validate.js';

interface Config {
  name: string;
  version: string;
}

let cfg: Config | null = null;

export const config = {
  async load(): Promise<void> {
    const content = await read('./package.json');
    const json = parse(content);
    cfg = validate(json);
  },
  get(): Config {
    if (!cfg) throw new Error('config not loaded');
    return cfg;
  },
};
