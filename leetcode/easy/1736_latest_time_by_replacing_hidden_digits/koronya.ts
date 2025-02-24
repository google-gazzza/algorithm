// [Easy] 1736. Latest Time by Replacing Hidden Digits
// 1736_latest_time_by_replacing_hidden_digits

// https://leetcode.com/problems/latest-time-by-replacing-hidden-digits
// Runtime: 72 ms, faster than 83.33% of TypeScript online submissions for Latest Time by Replacing Hidden Digits.
// Memory Usage: 40.3 MB, less than 66.67% of TypeScript online submissions for Latest Time by Replacing Hidden Digits.

/**
 * @param {string} time
 * @return {string}
 */
const isOver3 = (str: string): boolean => Number(str) > 3

function maximumTime(time: string): string {
  const [hh, mm] = time.split(':')
  const hour1: string = hh[0] !== '?' ? hh[0] : isOver3(hh[1]) === true ? '1' : '2'
  const hour2: string = hh[1] !== '?' ? hh[1] : hour1 === '2' ? '3' : '9'
  const min1: string = mm[0] !== '?' ? mm[0] : '5'
  const min2: string = mm[1] !== '?' ? mm[1] : '9'
  return `${hour1}${hour2}:${min1}${min2}`
}

maximumTime('2?:?0') //?
maximumTime('0?:3?') //?
maximumTime('1?:22') //?
maximumTime('?4:03') //?
maximumTime('?5:13') //?
