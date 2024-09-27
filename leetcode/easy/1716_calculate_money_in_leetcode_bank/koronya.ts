// [Easy] 1716. Calculate Money in Leetcode Bank
// 1716_calculate_money_in_leetcode_bank

// https://leetcode.com/problems/calculate-money-in-leetcode-bank
// Runtime: 84 ms, faster than 70.83% of TypeScript online submissions for Calculate Money in Leetcode Bank.
// Memory Usage: 39.2 MB, less than 75.00% of TypeScript online submissions for Calculate Money in Leetcode Bank.

const getSumOfSevenDivider = (num: number): number => 7 * (num + 3)
const getAccSumOfSeverDivider = (num: number): number => {
  if (num === 0) {
    return 0
  }
  let sum: number = 0
  for (let i: number = 1; i <= num; i += 1 || 0) {
    sum += getSumOfSevenDivider(i)
  }
  return sum
}

function totalMoney(n: number): number {
  const quotient: number = Math.floor(n / 7)
  let sum: number = getAccSumOfSeverDivider(quotient)
  let diff: number = n % 7
  let start: number = quotient + 1
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
