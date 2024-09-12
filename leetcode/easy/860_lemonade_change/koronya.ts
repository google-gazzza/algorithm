// [Easy] 860. Lemonade Change
// 860_lemonade_change

// https://leetcode.com/problems/lemonade-change
// Runtime: 92 ms, faster than 60.00% of TypeScript online submissions for Lemonade Change.
// Memory Usage: 40.9 MB, less than 66.67% of TypeScript online submissions for Lemonade Change.

/**
 * @param {number[]} bills
 * @return {boolean}
 */

const PRICE: number = 5

function lemonadeChange(bills: number[]): boolean {
  const restMap = new Map<number, number>()
  const billsLen: number = bills.length
  for (let i: number = 0; i < billsLen; i += 1) {
    const bill: number = bills[i]
    restMap.set(bill, (restMap.get(bill) || 0) + 1)
    const diff: number = bill - PRICE
    switch (diff) {
      case 5:
        if (!restMap.has(5)) {
          return false
        }
        restMap.set(5, restMap.get(5)! - 1)
        break
      case 15:
        const restFive = restMap.get(5) || 0
        const restTen = restMap.get(10) || 0
        if (restTen > 0 && restFive > 0) {
          restMap.set(5, restFive - 1)
          restMap.set(10, restTen - 1)
        } else if (restFive > 2) {
          restMap.set(5, restFive - 3)
        } else {
          return false
        }
        break
      default:
        break
    }
  }

  return true
}

lemonadeChange([5, 5, 5, 10, 20]) //?
lemonadeChange([5, 5, 10]) //?
lemonadeChange([10, 10]) //?
lemonadeChange([5, 5, 10, 10, 20]) //?
lemonadeChange([5, 5, 5, 5, 10, 5, 10, 10, 10, 20]) //?
