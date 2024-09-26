// [Easy] 1403. Minimum Subsequence in Non-Increasing Order
// 1403_minimum_subsequence_in_non-increasing_order

// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order
// Runtime: 84 ms, faster than 91.98% of JavaScript online submissions for Minimum Subsequence in Non-Increasing Order.
// Memory Usage: 40.5 MB, less than 11.73% of JavaScript online submissions for Minimum Subsequence in Non-Increasing Order.
const minSubsequence = nums => {
  const numsLen = nums.length
  const resultArr = []
  const total = nums.reduce((acc, num) => acc + num, 0)
  nums.sort((a, b) => b - a)
  let sum = 0
  let rest = total
  for (let i = 0; i < numsLen; i = i + 1 | 0) {
    const num = nums[i]
    sum += num
    rest -= num
    resultArr.push(num)
    if (rest < sum) {
      break
    }
  }

  return resultArr
}
