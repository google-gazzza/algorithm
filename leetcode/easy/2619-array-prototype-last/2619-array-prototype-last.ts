// leetcode/easy/2619. Array Prototype Last
// 2619-array-prototype-last
// URL: https://leetcode.com/problems/array-prototype-last/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference
declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }

  return this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};

let nums = [1, 2, 3]
console.log(nums.last());
// Output: 3
nums = []
console.log(nums.last());
// Output: -1
