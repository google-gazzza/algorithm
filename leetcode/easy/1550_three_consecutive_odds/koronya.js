// [Easy] 1550. Three Consecutive Odds
// 1550_three_consecutive_odds

// https://leetcode.com/problems/three-consecutive-odds
// Runtime: 76 ms, faster than 65.28% of JavaScript online submissions for Three Consecutive Odds.
// Memory Usage: 38.7 MB, less than 13.89% of JavaScript online submissions for Three Consecutive Odds.
const threeConsecutiveOdds = arr => {
  const arrLen = arr.length
  let count = 0
  for (let i = 0; i < arrLen; i = i + 1 | 0) {
    const num = arr[i]
    if (num % 2 === 0) {
      count = 0
      prevNumber = 0
    } else {
      if (count < 2) {
        count += 1
        prevNumber = num
      } else {
        return true
      }
    }
  }

  return false
}
