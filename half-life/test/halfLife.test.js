const assert = require('assert');
const halfLife = require('../halfLife');

describe('Half Life Test', () => {
  it('should return 1', () => {
    const half = halfLife(10, 5, 1);
    assert.deepEqual(half, 1);
  });
  it('should return 0.5', () => {
    const half = halfLife(8, 4, 2);
    assert.deepEqual(half, 0.5);
  });
  it('should return 1', () => {
    const half = halfLife(12, 3, 2);
    assert.deepEqual(half, 1);
  });
})