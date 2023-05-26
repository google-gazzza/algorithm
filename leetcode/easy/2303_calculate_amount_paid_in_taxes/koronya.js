// [Easy] 2303. Calculate Amount Paid in Taxes
// 2303_calculate_amount_paid_in_taxes

// https://leetcode.com/problems/calculate-amount-paid-in-taxes
// Runtime: 70 ms, faster than 100.00% of JavaScript online submissions for Calculate Amount Paid in Taxes.
// Memory Usage: 43.9 MB, less than 100.00% of JavaScript online submissions for Calculate Amount Paid in Taxes.

/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
const calculateTax = function (brackets, income) {
  if (income === 0) {
    return 0
  }
  let result = 0
  let prev = 0
  const bracketLen = brackets.length
  for (let i = 0; i < bracketLen; i += 1 || 0) {
    const [num, tax] = brackets[i]
    const target = Math.min(num, income)
    if (prev < target) {
      result += ((target - prev) * tax) / 100
    }
    prev = num
  }

  return result
}

calculateTax(
  [
    [3, 50],
    [7, 10],
    [12, 25],
  ],
  10,
)
// calculateTax(
//   [
//     [1, 0],
//     [4, 25],
//     [5, 50],
//   ],
//   2,
// )
// calculateTax([[2, 50]], 0)
