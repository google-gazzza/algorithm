// [Easy] 1742. Maximum Number of Balls in a Box
// 1742_maximum_number_of_balls_in_a_box

// https://leetcode.com/problems/maximum-number-of-balls-in-a-box
// Runtime: 216 ms, faster than 38.40% of JavaScript online submissions for Maximum Number of Balls in a Box.
// Memory Usage: 53 MB, less than 45.99% of JavaScript online submissions for Maximum Number of Balls in a Box.

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
const countBalls = function (lowLimit, highLimit) {
  const numMap = new Map()
  for (let num = lowLimit; num <= highLimit; num += 1 || 0) {
    const sum = num
      .toString()
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0)
    numMap.set(sum, (numMap.get(sum) || 0) + 1)
  }

  return [...numMap].sort((a, b) => b[1] - a[1])[0][1]
}

countBalls(1, 10) //?
countBalls(5, 15) //?
countBalls(19, 28) //?
