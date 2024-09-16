// [Medium] 1493. Longest Subarray of 1's After Deleting One Element
// 1493_longest_subarray_of_1's_after_deleting_one_element

// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element
// Runtime: 5360 ms, faster than 11.11% of TypeScript online submissions for Longest Subarray of 1's After Deleting One Element.
// Memory Usage: 57.5 MB, less than 11.11% of TypeScript online submissions for Longest Subarray of 1's After Deleting One Element.

function longestSubarray(nums: number[]): number {
  const numsLen: number = nums.length
  const str = nums.reduce((acc, cur) => acc + cur, '')
  let max: number = 0
  for (let i: number = 0; i < numsLen; i += 1) {
    const adjustStr = str.substring(0, i) + str.substring(i + 1)
    adjustStr.split('0').forEach((item) => {
      max = Math.max(max, item.length)
    })
  }

  return max
}
