// [Medium] 1885. Count Pairs in Two Arrays
// 1885_count_pairs_in_two_arrays

// https://leetcode.com/problems/count-pairs-in-two-arrays
// Runtime: 204 ms, faster than 100.00% of TypeScript online submissions for Count Pairs in Two Arrays.
// Memory Usage: 58 MB, less than 100.00% of TypeScript online submissions for Count Pairs in Two Arrays.

function countPairs(nums1: number[], nums2: number[]): number {
  let result = 0
  const numsLen = nums1.length
  const diffArr = nums1.map((item, index) => item - nums2[index])
  diffArr.sort((a, b) => a - b)
  let left = 0
  let right = numsLen - 1
  while (right > left) {
    if (diffArr[left] + diffArr[right] > 0) {
      result += right - left
      right -= 1
    } else {
      left += 1
    }
  }

  return result
}
