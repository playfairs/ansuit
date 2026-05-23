import { describe, it, expect } from 'vitest';
import { rand, pick, shuffle } from '../../src/util/rand.js';

describe('util/rand', () => {
  it('should generate random number', () => {
    const result = rand(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('should pick random element', () => {
    const result = pick(['a', 'b', 'c']);
    expect(['a', 'b', 'c']).toContain(result);
  });

  it('should shuffle array', () => {
    const result = shuffle([1, 2, 3]);
    expect(result).toHaveLength(3);
  });
});
