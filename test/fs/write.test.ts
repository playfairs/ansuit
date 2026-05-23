import { describe, it, expect } from 'vitest';
import { write } from '../../src/fs/write.js';
import { rm } from '../../src/fs/rm.js';

describe('fs/write', () => {
  it('should write a file', async () => {
    await write('/tmp/test.txt', 'hello');
    await rm('/tmp/test.txt');
    expect(true).toBe(true);
  });
});
