// [Easy] 1716. Calculate Money in Leetcode Bank
// 1716_calculate_money_in_leetcode_bank

// https://leetcode.com/problems/calculate-money-in-leetcode-bank
// Runtime: 72 ms, faster than 93.84% of JavaScript online submissions for Calculate Money in Leetcode Bank.
// Memory Usage: 38.6 MB, less than 43.60% of JavaScript online submissions for Calculate Money in Leetcode Bank.

const getSumOfSevenDivider = (num) => 7 * (num + 3)
const getAccSumOfSeverDivider = (num) => {
  if (num === 0) {
    return 0
  }
  let sum = 0
  for (let i = 1; i <= num; i += 1 || 0) {
    sum += getSumOfSevenDivider(i)
  }
  return sum
}

/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = function (n) {
  const quotient = Math.floor(n / 7)
  let sum = getAccSumOfSeverDivider(quotient)
  let diff = n % 7
  let start = quotient + 1
  while (diff > 0) {
    sum += start
    start += 1
    diff -= 1
  }

  return sum
}

totalMoney(4) //?
totalMoney(10) //?
totalMoney(20) //?
