import { describe, it, expect } from 'vitest';
import { clone } from '../../src/util/clone.js';

describe('util/clone', () => {
  it('should clone primitives', () => {
    expect(clone(123)).toBe(123);
    expect(clone('hello')).toBe('hello');
    expect(clone(true)).toBe(true);
  });

  it('should clone arrays', () => {
    const arr = [1, 2, 3];
    const cloned = clone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr);
  });

  it('should clone objects', () => {
    const obj = { a: 1, b: 2 };
    const cloned = clone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  it('should clone nested objects', () => {
    const obj = { a: { b: { c: 1 } } };
    const cloned = clone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.a).not.toBe(obj.a);
  });

  it('should clone dates', () => {
    const date = new Date();
    const cloned = clone(date);
    expect(cloned).toEqual(date);
    expect(cloned).not.toBe(date);
  });
});
