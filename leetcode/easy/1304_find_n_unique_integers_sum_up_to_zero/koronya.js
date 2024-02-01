// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero
// Runtime: 60 ms, faster than 69.53% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
// Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
const sumZero = n => {
  const resultArr = []
  const pair = Math.floor(n / 2)
  if (n % 2 === 1) {
    resultArr.push(0)
  }
  for (let i = 1; i <= pair; i += 1 | 0) {
    resultArr.push(i)
    resultArr.push(-i)
  }
  return resultArr
}
