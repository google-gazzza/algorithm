// https://leetcode.com/problems/day-of-the-week/
// Runtime: 60 ms, faster than 30.62% of JavaScript online submissions for Day of the Week.
// Memory Usage: 33.4 MB, less than 100.00% of JavaScript online submissions for Day of the Week.
const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const dayOfTheWeek = (day, month, year) => {
  return dayArr[new Date(`${year}-${month}-${day}`).getDay()]
}
