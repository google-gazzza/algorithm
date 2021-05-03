// [Medium] 154. Find Minimum in Rotated Sorted Array II
// 154_find_minimum_in_rotated_sorted_array_ii

//leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
// Runtime: 68 ms, faster than 98.52% of JavaScript online submissions for Find Minimum in Rotated Sorted Array II.
// Memory Usage: 38.9 MB, less than 59.78% of JavaScript online submissions for Find Minimum in Rotated Sorted Array II.

/**
 * @param {number[]} nums
 * @return {number}
 */

// 배열 전체를 볼필요가 없음
const findMin = function (nums) {
  const numsLen = nums.length
  let min = nums[0]
  if (min >= nums[numsLen - 1]) {
    for (let i = 1; i < numsLen; i += 1 || 0) {
      if (min > nums[i]) {
        return nums[i]
      }
    }
  }
  return min
}

// 단순히 최소값 리턴하면 되는 문제
const findMin2 = function (nums) {
  return Math.min(...nums)
}

findMin([3, 4, 5, 1, 2]) //?
findMin([3, 4, 5, 6, 7, 8, 1, 2]) //?
