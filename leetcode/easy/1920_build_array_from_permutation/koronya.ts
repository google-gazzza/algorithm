// [Easy] 1920. Build Array from Permutation
// 1920_build_array_from_permutation

// https://leetcode.com/problems/build-array-from-permutation
// Runtime: 96 ms, faster than 84.48% of TypeScript online submissions for Build Array from Permutation.
// Memory Usage: 43.4 MB, less than 36.21% of TypeScript online submissions for Build Array from Permutation.

function buildArray(nums: number[]): number[] {
  return nums.map((num) => nums[num])
}

buildArray([0, 2, 1, 5, 3, 4]) //?
buildArray([5, 0, 1, 2, 3, 4]) //?
