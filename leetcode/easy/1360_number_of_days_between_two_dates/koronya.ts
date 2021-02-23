// [Easy] 1360. Number of Days Between Two Dates
// 1360_number_of_days_between_two_dates

// https://leetcode.com/problems/number-of-days-between-two-dates
// Runtime: 88 ms, faster than 85.71% of TypeScript online submissions for Number of Days Between Two Dates.
// Memory Usage: 39.6 MB, less than 28.57% of TypeScript online submissions for Number of Days Between Two Dates.

const THIRTY_ONE_ARR: number[] = [1, 3, 5, 7, 8, 10, 12]
const THIRTY_ARR: number[] = [4, 6, 9, 11]
const LEAP_YEARS_DAYS: number = 29
const NORMAL_DAYS: number = 28

const getFebDate = (year: number): number => {
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

const getMonthDate = (year: number, month: number): number => {
  return THIRTY_ONE_ARR.includes(month) ? 31 : THIRTY_ARR.includes(month) ? 30 : getFebDate(year)
}

const getYearDate = (year: number): number => (getFebDate(year) === LEAP_YEARS_DAYS ? 366 : 365)

const getRelativeDays = (year: number, month: number, date: number): number => {
  let total: number = 0
  const adjustYear: number = year - 1971
  for (let i = 1971; i < year; i += 1 || 0) {
    total += getYearDate(i)
  }
  for (let i = 1; i < month; i += 1 || 0) {
    total += getMonthDate(year, i)
  }
  total += date
  return total
}

function daysBetweenDates(date1: string, date2: string): number {
  const [date1Year, date1Month, date1Date] = date1.split('-').map((item) => Number(item))
  const [date2Year, date2Month, date2Date] = date2.split('-').map((item) => Number(item))
  return Math.abs(getRelativeDays(date1Year, date1Month, date1Date) - getRelativeDays(date2Year, date2Month, date2Date))
}

daysBetweenDates('2019-06-29', '2019-06-30') //?
daysBetweenDates('2020-01-15', '2019-12-31') //?
