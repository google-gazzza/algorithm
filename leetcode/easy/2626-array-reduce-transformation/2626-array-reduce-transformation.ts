/*
# leetcode/easy/2626. Array Reduce Transformation
# 2626-array-reduce-transformation
# URL: https://leetcode.com/problems/array-reduce-transformation/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanatin
NOTE: Reference

*/

type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  let result = init;

  for (let i = 0; i < nums.length; i += 1) {
    result = fn(result, nums[i]);
  }

  return result;
}


// Input:
let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) {
  return accum + curr;
};
let init = 0;
console.log(reduce(nums, fn, init));
// Output: 10

// Input:
nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
  return accum + curr * curr;
};
init = 100;
console.log(reduce(nums, fn, init));
// Output: 130

nums = [];
fn = function sum(accum, curr) {
  return 0;
};
init = 25;
console.log(reduce(nums, fn, init));
// Output: 25
