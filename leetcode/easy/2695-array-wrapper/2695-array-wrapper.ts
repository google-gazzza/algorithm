// leetcode/easy/2695. Array Wrapper
// 2695-array-wrapper
// URL: https://leetcode.com/problems/array-wrapper/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

class ArrayWrapper {
  private value: number;

  private nums: number[];

  constructor(nums: number[]) {
    this.value = nums.reduce((acc, n) => acc + n, 0);
    this.nums = nums;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `[${this.nums.toString()}]`;
  }
}
