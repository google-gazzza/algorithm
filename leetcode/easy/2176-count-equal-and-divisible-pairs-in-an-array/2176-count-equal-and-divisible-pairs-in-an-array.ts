/*
2176-count-equal-and-divisible-pairs-in-an-array
leetcode/easy/2176. Count Equal and Divisible Pairs in an Array
Difficulty: easy
URL: https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

NOTE: Description

NOTE: Constraints
  - 1 <= nums.length <= 100
  - 1 <= nums[i], k <= 100

NOTE: Explanation
*/

function countPairs(nums: number[], k: number): number {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if ((nums[i] === nums[j]) && (((i * j) / k) % 1 === 0)) {
        count += 1;
      }
    }
  }

  return count;
};


// Example 1:
let nums = [3, 1, 2, 2, 2, 1, 3];
let k = 2;
console.log(countPairs(nums, k));
// Output: 4
// Explanation:
//   There are 4 pairs that meet all the requirements:
//   - nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
// - nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
// - nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
// - nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.
// Example 2:
//
nums = [1, 2, 3, 4];
k = 1;
console.log(countPairs(nums, k));
// Output: 0
// Explanation: Since no value in nums is repeated, there are no pairs (i,j) that meet all the requirements.
