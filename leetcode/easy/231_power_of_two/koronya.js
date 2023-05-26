// [Easy] 231. Power of Two
// 231_power_of_two

// https://leetcode.com/problems/power-of-two
// Runtime: 80 ms, faster than 92.62% of JavaScript online submissions for Power of Two.
// Memory Usage: 38.2 MB, less than 6.25% of JavaScript online submissions for Power of Two.
const isPowerOfTwo = n => {
  if (n <= 0) {
    return false
  }
  let result = true
  
  while (n !== 1) {
    if (n % 2 === 1) {
      result = false
      break
    }
    if (n === 1) {
      break
    }
    n /= 2
  }

  return result
}
