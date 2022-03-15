// [Easy] 1118. Number of Days in a Month
// 1118_number_of_days_in_a_month

// https://leetcode.com/problems/number-of-days-in-a-month
// Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Number of Days in a Month.
// Memory Usage: 42 MB, less than 30.77% of JavaScript online submissions for Number of Days in a Month.

const THIRTY_ONE_ARR = [1, 3, 5, 7, 8, 10, 12]
const THIRTY_ARR = [4, 6, 9, 11]

/**
 * @param {number} year
 * @param {number} month
 * @return {number}
 */
const numberOfDays = function (year, month) {
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

numberOfDays(1992, 7) === 31
numberOfDays(2000, 2) === 29
numberOfDays(1900, 2) === 28
