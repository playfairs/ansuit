import { describe, it, expect } from 'vitest';
import { now, sec, ms } from '../../src/time/now.js';

describe('time/now', () => {
  it('should return current time in milliseconds', () => {
    const time = now();
    expect(time).toBeGreaterThan(0);
    expect(typeof time).toBe('number');
  });

  it('should return current time in seconds', () => {
    const time = sec();
    expect(time).toBeGreaterThan(0);
    expect(typeof time).toBe('number');
  });

  it('should return current time in milliseconds', () => {
    const time = ms();
    expect(time).toBeGreaterThan(0);
    expect(typeof time).toBe('number');
  });
});
