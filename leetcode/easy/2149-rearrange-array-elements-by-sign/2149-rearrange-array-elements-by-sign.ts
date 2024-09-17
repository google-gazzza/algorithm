/*
2149-rearrange-array-elements-by-sign
leetcode/easy/2149. Rearrange Array Elements by Sign
Difficulty: easy
URL: https://leetcode.com/problems/rearrange-array-elements-by-sign/

NOTE: Description

NOTE: Constraints
  - 2 <= nums.length <= 2 * 105
  - nums.length is even
  - 1 <= |nums[i]| <= 105
  - nums consists of equal number of positive and negative integers.

NOTE: Explanation
*/

function zip(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr1.length; i += 1) {
    result.push(arr1[i], arr2[i]);
  }

  return result;
}

function rearrangeArray(nums: number[]): number[] {
  return zip(nums.filter((e) => Math.sign(e) === 1), nums.filter((e) => Math.sign(e) === -1));
};
