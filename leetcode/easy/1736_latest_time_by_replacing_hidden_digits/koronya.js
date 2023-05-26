// [Easy] 1736. Latest Time by Replacing Hidden Digits
// 1736_latest_time_by_replacing_hidden_digits

// https://leetcode.com/problems/latest-time-by-replacing-hidden-digits
// Runtime: 80 ms, faster than 56.00% of JavaScript online submissions for Latest Time by Replacing Hidden Digits.
// Memory Usage: 38.8 MB, less than 40.00% of JavaScript online submissions for Latest Time by Replacing Hidden Digits.

/**
 * @param {string} time
 * @return {string}
 */
const isOver3 = (str) => Number(str) > 3

const maximumTime = function (time) {
  const [hh, mm] = time.split(':')
  const hour1 = hh[0] !== '?' ? hh[0] : isOver3(hh[1]) === true ? '1' : '2'
  const hour2 = hh[1] !== '?' ? hh[1] : hour1 === '2' ? '3' : '9'
  const min1 = mm[0] !== '?' ? mm[0] : '5'
  const min2 = mm[1] !== '?' ? mm[1] : '9'
  return `${hour1}${hour2}:${min1}${min2}`
}

maximumTime('2?:?0') //?
maximumTime('0?:3?') //?
maximumTime('1?:22') //?
maximumTime('?4:03') //?
maximumTime('?5:13') //?
