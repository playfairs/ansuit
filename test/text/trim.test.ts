import { describe, it, expect } from 'vitest';
import { trim, trimLeft, trimRight } from '../../src/text/trim.js';

describe('text/trim', () => {
  it('should trim whitespace', () => {
    expect(trim('  hello  ')).toBe('hello');
  });

  it('should trim left whitespace', () => {
    expect(trimLeft('  hello  ')).toBe('hello  ');
  });

  it('should trim right whitespace', () => {
    expect(trimRight('  hello  ')).toBe('  hello');
  });

  it('should handle empty strings', () => {
    expect(trim('')).toBe('');
  });

  it('should handle strings with only whitespace', () => {
    expect(trim('   ')).toBe('');
  });
});
