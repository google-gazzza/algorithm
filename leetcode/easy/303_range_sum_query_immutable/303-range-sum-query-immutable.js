/*
303-range-sum-query-immutable

# leetcode/easy/303. Range Sum Query - Immutable
Difficulty: easy
URL: https://leetcode.com/problems/range-sum-query-immutable/
Tags: dynamic-programming

## Approach

### en

### kr

## Solution
### JavaScript

*/

/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.nums.slice(i, j + 1).reduce((acc, cur) => acc + cur);
};
