const _ = require('./index');

let sum = 0;

_.forEach([1, 2, 3], (value) => {
  sum += value;
});

console.log(sum);

if (sum !== 6) {
  throw new Error('Expected sum of array to equal 6');
}
