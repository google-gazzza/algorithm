// leetcode/medium/153. Find Minimum in Rotated Sorted Array
// 153-find-minimum-in-rotated-sorted-array
// URL: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

function findMin(nums: number[]): number {
  return Math.min(...nums);
}

nums = [3, 4, 5, 1, 2];
console.log(findMin(nums));
// Output: 1

nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums));
// Output: 0

nums = [11, 13, 15, 17];
console.log(findMin(nums));
// Output: 11
