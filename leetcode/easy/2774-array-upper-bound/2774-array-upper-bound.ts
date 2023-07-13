// leetcode/easy/2774. Array Upper Bound
// 2774-array-upper-bound
// URL: https://leetcode.com/problems/array-upper-bound/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

declare global {
  interface Array<T> {
    upperBound(target: number): number;
  }
}

Array.prototype.upperBound = function (target: number) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] === target) {
      return i;
    }
  }
  return -1;
};

[3, 4, 5].upperBound(5); // 2
[1, 4, 5].upperBound(2); // -1
[3, 4, 6, 6, 6, 6, 7].upperBound(6); // 5
