const assert = require("assert");
console.log("Hello from closure!");

function range(start, end) {
  if (end === undefined) {
    return function (end) {
      return range(start, end);
    };
  }
  if (end < start) return [];
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

assert.deepEqual(range(3, 3), [3]);
assert.deepEqual(range(3, 8), [3, 4, 5, 6, 7, 8]);
assert.deepEqual(range(3, 0), []);

var start3 = range(3);
var start4 = range(4);

assert.deepEqual(start3(3), [3]);
assert.deepEqual(start3(8), [3, 4, 5, 6, 7, 8]);
assert.deepEqual(start3(0), []);

assert.deepEqual(start4(6), [4, 5, 6]);
