import { describe, it, expect } from 'vitest';
import { isString, isNumber, isBoolean, isObject, isArray, isNull, isUndefined, isFunction } from '../../src/types/is.js';

describe('types/is', () => {
  it('should identify strings', () => {
    expect(isString('hello')).toBe(true);
    expect(isString(123)).toBe(false);
  });

  it('should identify numbers', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber('123')).toBe(false);
  });

  it('should identify booleans', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean('true')).toBe(false);
  });

  it('should identify objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject(null)).toBe(false);
    expect(isObject([])).toBe(false);
  });

  it('should identify arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray({})).toBe(false);
  });

  it('should identify null', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
  });

  it('should identify undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
  });

  it('should identify functions', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction({})).toBe(false);
  });
});
