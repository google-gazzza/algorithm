// [Easy] 1470. Shuffle the Array
// 1470_shuffle_the_array

// https://leetcode.com/problems/shuffle-the-array
// Runtime: 96 ms, faster than 27.35% of JavaScript online submissions for Shuffle the Array.
// Memory Usage: 38.2 MB, less than 100.00% of JavaScript online submissions for Shuffle the Array.
const shuffle = (nums, n) => {
  const resultArr = []
  for (let i = 0; i < n; i = i + 1 | 0) {
    resultArr.push(nums[i])
    resultArr.push(nums[n + i])
  }
  return resultArr
}
