// [Medium] 1753. Maximum Score From Removing Stones
// 1753_maximum_score_from_removing_stones

// https://leetcode.com/problems/maximum-score-from-removing-stones
// Runtime: 356 ms, faster than 14.29% of JavaScript online submissions for Maximum Score From Removing Stones.
// Memory Usage: 44.5 MB, less than 42.86% of JavaScript online submissions for Maximum Score From Removing Stones.

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const maximumScore = function (a, b, c) {
  let count = 0
  let targetArr = [
    [a, 0],
    [b, 1],
    [c, 2],
  ]
  while (targetArr.reduce((acc, cur) => (cur[0] === 0 ? acc + 1 : acc), 0) < 2) {
    let maxIndex
    let minIndex
    const tempArr = [...targetArr].sort((a, b) => a[0] - b[0])
    if (tempArr[0][0] === 0) {
      minIndex = tempArr[1][1]
      maxIndex = tempArr[2][1]
    } else {
      minIndex = tempArr[0][1]
      maxIndex = tempArr[2][1]
    }
    count += 1
    targetArr[maxIndex][0] -= 1
    targetArr[minIndex][0] -= 1
  }

  return count
}

maximumScore(0, 4, 4) //?
maximumScore(2, 4, 6) //?
maximumScore(4, 4, 6) //?
maximumScore(1, 8, 8) //?
maximumScore(6, 2, 1) //?

maximumScore(1, 4, 3) //?
maximumScore(2, 0, 2) //?
maximumScore(14, 4, 18) //?
maximumScore(0, 0, 1) //?
