// [Easy] 1134. Armstrong Number
// 1134_armstrong_number

// https://leetcode.com/problems/armstrong-number
// Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Armstrong Number.
// Memory Usage: 38.5 MB, less than 75.68% of JavaScript online submissions for Armstrong Number.

/**
 * @param {number} n
 * @return {boolean}
 */
const isArmstrong = function (n) {
  const nStr = n.toString()
  const nLen = nStr.length
  return n === nStr.split('').reduce((acc, cur) => acc + Number(cur) ** nLen, 0)
}

isArmstrong(153) //?
isArmstrong(123) //?
