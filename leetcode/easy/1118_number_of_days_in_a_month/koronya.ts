// [Easy] 1118. Number of Days in a Month
// 1118_number_of_days_in_a_month

// https://leetcode.com/problems/number-of-days-in-a-month
// Runtime: 91 ms, faster than 100.00% of TypeScript online submissions for Number of Days in a Month.
// Memory Usage: 43.2 MB, less than 100.00% of TypeScript online submissions for Number of Days in a Month.

const THIRTY_ONE_ARR = [1, 3, 5, 7, 8, 10, 12]
const THIRTY_ARR = [4, 6, 9, 11]

function numberOfDays(year: number, month: number): number {
  if (THIRTY_ONE_ARR.includes(month) === true) {
    return 31
  }
  if (THIRTY_ARR.includes(month) === true) {
    return 30
  }
  if (year % 400 === 0) {
    return 29
  }
  if (year % 4 === 0 && year % 100 !== 0) {
    return 29
  }
  return 28
}
