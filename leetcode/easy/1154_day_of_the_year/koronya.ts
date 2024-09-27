// [Easy] 1154. Day of the Year
// 1154_day_of_the_year

// https://leetcode.com/problems/day-of-the-year
// Runtime: 80 ms, faster than 90.91% of TypeScript online submissions for Day of the Year.
// Memory Usage: 40.2 MB, less than 54.55% of TypeScript online submissions for Day of the Year.
const monthDayArr: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const getPassedDay = (month: number): number => {
  let day = 0
  for (let i: number = 0; i < month - 1; i += 1 || 0) {
    day += monthDayArr[i]
  }
  return day
}
const isLeapYear = (year: number): boolean => {
  const isDividedBy4 = year % 4 === 0
  const isDividedBy100 = year % 100 === 0
  const isDividedBy400 = year % 400 === 0

  return (isDividedBy4 && isDividedBy100 && isDividedBy400) || (isDividedBy4 && !isDividedBy100)
}

function dayOfYear(date: string): number {
  const [year, month, day] = date.split('-').map((str) => Number(str))
  let result: number = getPassedDay(month)
  if (month > 2 && isLeapYear(year)) {
    result += 1
  }
  result += day

  return result
}
