// [Medium] 1493. Longest Subarray of 1's After Deleting One Element
// 1493_longest_subarray_of_1's_after_deleting_one_element

// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element
// Runtime: 5201 ms, faster than 5.95% of JavaScript online submissions for Longest Subarray of 1's After Deleting One Element.
// Memory Usage: 57.2 MB, less than 5.95% of JavaScript online submissions for Longest Subarray of 1's After Deleting One Element.

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function (nums) {
  const numsLen = nums.length
  const str = nums.reduce((acc, cur) => acc + cur, '')
  let max = 0
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const adjustStr = str.substring(0, i) + str.substring(i + 1)
    adjustStr.split('0').forEach((item) => {
      max = Math.max(max, item.length)
    })
  }

  return max
}

longestSubarray([1, 1, 0, 1]) //?
longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]) //?
longestSubarray([1, 1, 1]) //?
