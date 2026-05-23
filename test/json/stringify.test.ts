import { describe, it, expect } from 'vitest';
import { stringify } from '../../src/json/stringify.js';

describe('json/stringify', () => {
  it('should stringify JSON', () => {
    const result = stringify({ foo: 'bar' });
    expect(result).toBe('{"foo":"bar"}');
  });
});
