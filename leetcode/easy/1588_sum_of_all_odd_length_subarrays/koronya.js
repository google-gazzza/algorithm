// [Easy] 1588. Sum of All Odd Length Subarrays
// 1588_sum_of_all_odd_length_subarrays

// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
// Runtime: 72 ms, faster than 93.35% of JavaScript online submissions for Sum of All Odd Length Subarrays.
// Memory Usage: 38.7 MB, less than 7.07% of JavaScript online submissions for Sum of All Odd Length Subarrays.
const sumOddLengthSubarrays = arr => {
    let total = 0
    const arrLen = arr.length
    const getSumOfOddNumber = x => {
      let total = 0
      for (let i = 0; i < arrLen - (x - 1); i = i + 1 | 0) {
        total += getSumOfMultiNumbers(x, i)
      }
      return total
    }
    const getSumOfMultiNumbers = (number, start) => {
      const limit = start + number
      let total = 0
      for (let i = start; i < limit; i = i + 1 | 0) {
        total += arr[i]
      }
      return total
    }
  
    for (let i = 1; i <= arrLen; i = i + 2 | 0) {
      total += getSumOfOddNumber(i)
    }
  
    return total
  }
