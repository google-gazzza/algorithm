// [Easy] 1507. Reformat Date
// 1507_reformat_date

// https://leetcode.com/problems/reformat-date
// Runtime: 72 ms, faster than 84.98% of JavaScript online submissions for Reformat Date.
// Memory Usage: 38.6 MB, less than 17.84% of JavaScript online submissions for Reformat Date.
const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const convertMonth = month => String(monthArr.indexOf(month) + 1).padStart(2, '0')
const convertDay = day => day.replace(/[^0-9]/g,'').padStart(2, '0')

const reformatDate = date => {
  const [day, month, year] = date.split(' ')
  return `${year}-${convertMonth(month)}-${convertDay(day)}`
}
