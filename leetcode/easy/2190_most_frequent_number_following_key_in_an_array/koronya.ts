// [Easy] 2190. Most Frequent Number Following Key In an Array
// 2190_most_frequent_number_following_key_in_an_array

// https://leetcode.com/problems/most-frequent-number-following-key-in-an-array
// Runtime: 64 ms, faster than 95.83% of TypeScript online submissions for Most Frequent Number Following Key In an Array.
// Memory Usage: 45.6 MB, less than 33.33% of TypeScript online submissions for Most Frequent Number Following Key In an Array.

function mostFrequent(nums: number[], key: number): number {
  const numsLen = nums.length
  const map = new Map<number, number>()
  for (let i: number = 1; i < numsLen; i += 1) {
    if (nums[i - 1] === key) {
      const num = nums[i]
      map.set(num, (map.get(num) || 0) + 1)
    }
  }

  return [...map].sort((a, b) => b[1] - a[1])[0][0]
}
