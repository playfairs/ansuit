import { describe, it, expect } from 'vitest';
import { split, lines, words } from '../../src/text/split.js';

describe('text/split', () => {
  it('should split string', () => {
    expect(split('a,b,c', ',')).toEqual(['a', 'b', 'c']);
  });

  it('should split lines', () => {
    expect(lines('a\nb\nc')).toEqual(['a', 'b', 'c']);
  });

  it('should split words', () => {
    expect(words('a b c')).toEqual(['a', 'b', 'c']);
  });
});
