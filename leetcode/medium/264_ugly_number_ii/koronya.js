// [Medium] 264. Ugly Number II
// 264_ugly_number_ii

// https://leetcode.com/problems/ugly-number-ii
// Runtime: 80 ms, faster than 56.44% of JavaScript online submissions for Ugly Number II.
// Memory Usage: 40.2 MB, less than 23.02% of JavaScript online submissions for Ugly Number II.
const nthUglyNumber = n => {
  const uglyNumbers = [1]
  let indexOf2 = 0
  let indexOf3 = 0
  let indexOf5 = 0
  for (let i = 1; i < n; i = i + 1 | 0) {
    const mul2 = uglyNumbers[indexOf2] * 2
    const mul3 = uglyNumbers[indexOf3] * 3
    const mul5 = uglyNumbers[indexOf5] * 5
    const min = Math.min(mul2, mul3, mul5)
    if (min === mul2) {
      indexOf2 += 1
    }
    if (min === mul3) {
      indexOf3 += 1
    }
    if (min === mul5) {
      indexOf5 += 1
    }
    uglyNumbers.push(min)
  }

  return uglyNumbers[uglyNumbers.length - 1]
}
