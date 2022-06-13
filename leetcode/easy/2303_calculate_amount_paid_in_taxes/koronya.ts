// [Easy] 2303. Calculate Amount Paid in Taxes
// 2303_calculate_amount_paid_in_taxes

// https://leetcode.com/problems/calculate-amount-paid-in-taxes
// Runtime: 134 ms, faster than 100.00% of TypeScript online submissions for Calculate Amount Paid in Taxes.
// Memory Usage: 45.2 MB, less than 100.00% of TypeScript online submissions for Calculate Amount Paid in Taxes.

function calculateTax(brackets: number[][], income: number): number {
  if (income === 0) {
    return 0
  }
  let result = 0
  let prev = 0
  const bracketLen = brackets.length
  for (let i: number = 0; i < bracketLen; i += 1) {
    const [num, tax] = brackets[i]
    const target = Math.min(num, income)
    if (prev < target) {
      result += ((target - prev) * tax) / 100
    }
    prev = num
  }

  return result
}
