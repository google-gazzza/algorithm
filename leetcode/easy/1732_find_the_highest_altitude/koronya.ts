// [Easy] 1732. Find the Highest Altitude
// 1732_find_the_highest_altitude

// https://leetcode.com/problems/find-the-highest-altitude
// Runtime: 76 ms, faster than 80.00% of TypeScript online submissions for Find the Highest Altitude.
// Memory Usage: 39 MB, less than 100.00% of TypeScript online submissions for Find the Highest Altitude.

/**
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitude(gain: number[]): number {
  let max: number = 0
  gain.reduce((acc: number, cur: number): number => {
    const now: number = acc + cur
    max = Math.max(max, now)
    return now
  }, 0)

  return max
}

largestAltitude([-5, 1, 5, 0, -7]) //?
largestAltitude([-4, -3, -2, -1, 4, 3, 2]) //?
