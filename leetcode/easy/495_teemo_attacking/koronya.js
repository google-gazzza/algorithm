// [Easy] 495. Teemo Attacking
// 495_teemo_attacking

// https://leetcode.com/problems/teemo-attacking
// Runtime: 72 ms, faster than 91.93% of JavaScript online submissions for Teemo Attacking.
// Memory Usage: 45.9 MB, less than 10.18% of JavaScript online submissions for Teemo Attacking.

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = function (timeSeries, duration) {
  let max = 0
  let sum = 0
  timeSeries.forEach((item) => {
    sum += max <= item ? duration : duration - (max - item)
    max = item + duration
  })
  return sum
}

// TLE
const findPoisonedDuration2 = function (timeSeries, duration) {
  const numSet = new Set()
  timeSeries.forEach((item) => {
    for (let i = 0; i < duration; i += 1 || 0) {
      numSet.add(item + i)
    }
  })
  return numSet.size
}

findPoisonedDuration([1, 4], 2)
findPoisonedDuration([1, 2], 2)
findPoisonedDuration([1, 4], 5)
