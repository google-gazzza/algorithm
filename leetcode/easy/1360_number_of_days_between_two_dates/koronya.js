// [Easy] 1360. Number of Days Between Two Dates
// 1360_number_of_days_between_two_dates

// https://leetcode.com/problems/number-of-days-between-two-dates
// Runtime: 76 ms, faster than 85.45% of JavaScript online submissions for Number of Days Between Two Dates.
// Memory Usage: 39 MB, less than 16.36% of JavaScript online submissions for Number of Days Between Two Dates.

const THIRTY_ONE_ARR = [1, 3, 5, 7, 8, 10, 12]
const THIRTY_ARR = [4, 6, 9, 11]
const LEAP_YEARS_DAYS = 29
const NORMAL_DAYS = 28

const getFebDate = (year) => {
  if (year % 400 === 0) {
    return LEAP_YEARS_DAYS
  } else if (year % 100 === 0) {
    return NORMAL_DAYS
  } else if (year % 4 === 0) {
    return LEAP_YEARS_DAYS
  } else {
    return NORMAL_DAYS
  }
}

const getMonthDate = (year, month) => {
  return THIRTY_ONE_ARR.includes(month) ? 31 : THIRTY_ARR.includes(month) ? 30 : getFebDate(year)
}

const getYearDate = (year) => (getFebDate(year) === LEAP_YEARS_DAYS ? 366 : 365)

const getRelativeDays = (year, month, date) => {
  let total = 0
  for (let i = 1971; i < year; i += 1 || 0) {
    total += getYearDate(i)
  }
  for (let i = 1; i < month; i += 1 || 0) {
    total += getMonthDate(year, i)
  }
  total += date
  return total
}

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
const daysBetweenDates = function (date1, date2) {
  const [date1Year, date1Month, date1Date] = date1.split('-').map((item) => Number(item))
  const [date2Year, date2Month, date2Date] = date2.split('-').map((item) => Number(item))
  return Math.abs(getRelativeDays(date1Year, date1Month, date1Date) - getRelativeDays(date2Year, date2Month, date2Date))
}

daysBetweenDates('2019-06-29', '2019-06-30') //?
daysBetweenDates('2020-01-15', '2019-12-31') //?
