import { describe, it, expect } from 'vitest';
import { parse } from '../../src/json/parse.js';

describe('json/parse', () => {
  it('should parse JSON', () => {
    const result = parse('{"foo": "bar"}');
    expect(result).toEqual({ foo: 'bar' });
  });
});
