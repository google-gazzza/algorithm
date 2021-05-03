// [Medium] 154. Find Minimum in Rotated Sorted Array II
// 154_find_minimum_in_rotated_sorted_array_ii

//leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
// Runtime: 84 ms, faster than 59.38% of TypeScript online submissions for Find Minimum in Rotated Sorted Array II.
// Memory Usage: 40.3 MB, less than 50.00% of TypeScript online submissions for Find Minimum in Rotated Sorted Array II.

// 배열 전체를 볼필요가 없음
function findMin(nums: number[]): number {
  const numsLen: number = nums.length
  let min: number = nums[0]
  if (min >= nums[numsLen - 1]) {
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
