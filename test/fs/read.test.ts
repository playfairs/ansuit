import { describe, it, expect } from 'vitest';
import { read } from '../../src/fs/read.js';

describe('fs/read', () => {
  it('should read a file', async () => {
    const content = await read('package.json');
    expect(content).toBeTruthy();
  });
});
