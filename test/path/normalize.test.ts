import { describe, it, expect } from 'vitest';
import { normalize } from '../../src/path/normalize.js';

describe('path/normalize', () => {
  it('should normalize a path', () => {
    expect(normalize('a/b/../c')).toBe('a/c');
  });

  it('should handle multiple slashes', () => {
    expect(normalize('a//b')).toBe('a/b');
  });

  it('should handle trailing slashes', () => {
    expect(normalize('a/b/')).toBe('a/b');
  });
});
