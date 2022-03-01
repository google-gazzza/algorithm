// [Easy] 495. Teemo Attacking
// 495_teemo_attacking

// https://leetcode.com/problems/teemo-attacking
// Runtime: 119 ms, faster than 41.67% of TypeScript online submissions for Teemo Attacking.
// Memory Usage: 46.4 MB, less than 44.44% of TypeScript online submissions for Teemo Attacking.

function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let max: number = 0
  let sum: number = 0
  timeSeries.forEach((item) => {
    sum += max <= item ? duration : duration - (max - item)
    max = item + duration
  })
  return sum
}
