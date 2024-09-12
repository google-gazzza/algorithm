/*
448-find-all-numbers-disappeared-in-an-array
leetcode/easy/448. Find All Numbers Disappeared in an Array
Difficulty: easy
URL: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

NOTE: Description

NOTE: Constraints
  n == nums.length
  1 <= n <= 105
  1 <= nums[i] <= n

NOTE: Explanation
*/

function findDisappearedNumbers(nums: number[]): number[] {
  const inputSet = new Set(nums);
  const range = new Set(Array(nums.length + 1).keys());
  range.delete(0);

  inputSet.forEach((key) => range.delete(key));

  return Array.from(range);
}

// Example 1:
//
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
// Output: [5,6]
// Example 2:
//
nums = [1, 1];
console.log(findDisappearedNumbers(nums));
// Output: [2]
