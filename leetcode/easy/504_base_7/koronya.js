// [Easy] 504. Base 7
// 504_base_7

// https://leetcode.com/problems/base-7
// Runtime: 76 ms, faster than 80.22% of JavaScript online submissions for Base 7.
// Memory Usage: 38.5 MB, less than 38.46% of JavaScript online submissions for Base 7.
const convertToBase7 = num => {
  const symbol = num < 0 ? '-' : ''
  const reminderArr = []
  let target = Math.abs(num)
  while (true) {
    const quota = Math.floor(target / 7)
    const reminder = target % 7
    if (quota === 0) {
      reminderArr.push(reminder)
      break
    }
    reminderArr.push(reminder)
    target = quota
  }

  return reminderArr.reverse().reduce((acc, cur) => acc + cur, symbol)
}
