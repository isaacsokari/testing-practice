const assert = require('assert');

const { forEach } = require('../index');

let numbers;

beforeEach(() => {
  numbers = [1, 2, 3];
});

it('should sum an array', () => {
  let total = 0;

  forEach(numbers, (value) => {
    total += value;
  });

  assert.strictEqual(total, 6);
  numbers[2] = 10;
});

it('beforeEach runs before each test', () => {
  assert.deepStrictEqual(numbers, [1, 2, 3]);
});
