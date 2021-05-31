// [Medium] 539. Minimum Time Difference
// 539_minimum_time_difference

// https://leetcode.com/problems/minimum-time-difference
// Runtime: 100 ms, faster than 55.17% of JavaScript online submissions for Minimum Time Difference.
// Memory Usage: 42 MB, less than 34.48% of JavaScript online submissions for Minimum Time Difference.

const transformNumber = (str) => {
  const [hh, mm] = str.split(':')
  return Number(hh) * 60 + Number(mm)
}

const getDiff = (numA, numB) => {
  const small = numA <= numB ? numA : numB
  const large = numA <= numB ? numB : numA
  return Math.min(large - small, small + 1440 - large)
}

/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = function (timePoints) {
  const timePointsLen = timePoints.length
  const numArr = timePoints.map((time) => transformNumber(time))
  let min = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < timePointsLen; i += 1 || 0) {
    const num = numArr[i]
    for (let j = 0; j < timePointsLen; j += 1 || 0) {
      if (i !== j) {
        const diff = getDiff(num, numArr[j])
        if (diff === 0) {
          return 0
        }
        min = Math.min(min, diff)
      }
    }
  }
  return min
}

findMinDifference(['23:59', '00:00']) //?
findMinDifference(['00:00', '23:59', '00:00']) //?
