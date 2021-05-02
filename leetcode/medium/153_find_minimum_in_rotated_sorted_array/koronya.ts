// [Medium] 153. Find Minimum in Rotated Sorted Array
// 153_find_minimum_in_rotated_sorted_array

// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array
// Runtime: 72 ms, faster than 98.00% of TypeScript online submissions for Find Minimum in Rotated Sorted Array.
// Memory Usage: 40.4 MB, less than 24.00% of TypeScript online submissions for Find Minimum in Rotated Sorted Array.

// 배열 전체를 볼필요가 없음
function findMin(nums: number[]): number {
  const numsLen: number = nums.length
  let min: number = nums[0]
  if (min > nums[numsLen - 1]) {
    for (let i: number = 1; i < numsLen; i += 1) {
      if (min > nums[i]) {
        return nums[i]
      }
    }
  }
  return min
}

// 단순히 최소값 리턴하면 되는 문제
function findMin2(nums: number[]): number {
  return Math.min(...nums)
}

findMin([3, 4, 5, 1, 2]) //?
findMin([3, 4, 5, 6, 7, 8, 1, 2]) //?
