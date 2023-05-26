// [Easy] 1154. Day of the Year
// 1154_day_of_the_year

// https://leetcode.com/problems/day-of-the-year
// Runtime: 76 ms, faster than 87.27% of JavaScript online submissions for Day of the Year.
// Memory Usage: 38.8 MB, less than 52.73% of JavaScript online submissions for Day of the Year.
const monthDayArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const getPassedDay = (month) => {
  let day = 0
  for (let i = 0; i < month - 1; i += 1 || 0) {
    day += monthDayArr[i]
  }
  return day
}
const isLeapYear = (year) => {
  const isDividedBy4 = year % 4 === 0
  const isDividedBy100 = year % 100 === 0
  const isDividedBy400 = year % 400 === 0

  return (isDividedBy4 && isDividedBy100 && isDividedBy400) || (isDividedBy4 && !isDividedBy100)
}

const dayOfYear = function (date) {
  const [year, month, day] = date.split('-').map((str) => Number(str))
  let result = getPassedDay(month)
  if (month > 2 && isLeapYear(year)) {
    result += 1
  }
  result += day

  return result
}
