// [Easy] 1920. Build Array from Permutation
// 1920_build_array_from_permutation

// https://leetcode.com/problems/build-array-from-permutation
// Runtime: 80 ms, faster than 98.72% of JavaScript online submissions for Build Array from Permutation.
// Memory Usage: 42.4 MB, less than 61.06% of JavaScript online submissions for Build Array from Permutation.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function (nums) {
  return nums.map((num) => nums[num])
}

buildArray([0, 2, 1, 5, 3, 4]) //?
buildArray([5, 0, 1, 2, 3, 4]) //?
