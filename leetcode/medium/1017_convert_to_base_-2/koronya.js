// [Medium] 1017. Convert to Base -2
// 1017_convert_to_base_-2

// https://leetcode.com/problems/convert-to-base-2
// Runtime: 84 ms, faster than 21.43% of JavaScript online submissions for Convert to Base -2.
// Memory Usage: 38.9 MB, less than 7.14% of JavaScript online submissions for Convert to Base -2.
const DIVIDER = -2

const baseNeg2 = N => {
  const reminderArr = []
  let target = N
  while (true) {
    const quota = Math.ceil(target / DIVIDER)
    const reminder = target - (DIVIDER * quota)
    if (quota === 0) {
      reminderArr.push(reminder)
      break
    }
    reminderArr.push(reminder)
    target = quota
  }

  return reminderArr.reverse().reduce((acc, cur) => acc + cur, '')
}
