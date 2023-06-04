// leetcode/easy/2620. Counter
// 2620-counter
// URL: https://leetcode.com/problems/counter/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function createCounter(n: number): () => number {
  let count = n - 1;

  return function () {
    count += 1;

    return count;
  };
}

n = 10;
let counter = createCounter(n);
console.log(counter()) // 10
console.log(counter())// 11
console.log(counter())// 12

// ["call","call","call"]
// Output: [10,11,12]

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
