// [Easy] 2190. Most Frequent Number Following Key In an Array
// 2190_most_frequent_number_following_key_in_an_array

// https://leetcode.com/problems/most-frequent-number-following-key-in-an-array
// Runtime: 82 ms, faster than 67.22% of JavaScript online submissions for Most Frequent Number Following Key In an Array.
// Memory Usage: 44.6 MB, less than 55.85% of JavaScript online submissions for Most Frequent Number Following Key In an Array.

/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
const mostFrequent = function (nums, key) {
  const numsLen = nums.length
  const map = new Map()
  for (let i = 1; i < numsLen; i += 1 || 0) {
    if (nums[i - 1] === key) {
      const num = nums[i]
      map.set(num, (map.get(num) || 0) + 1)
    }
  }

  return [...map].sort((a, b) => b[1] - a[1])[0][0]
}

mostFrequent([1, 100, 200, 1, 100], 1)
mostFrequent([2, 2, 2, 2, 3], 2)
mostFrequent([2, 1000, 2, 1000, 2, 3], 2)
