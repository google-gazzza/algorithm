// [Easy] 1732. Find the Highest Altitude
// 1732_find_the_highest_altitude

// https://leetcode.com/problems/find-the-highest-altitude
// Runtime: 76 ms, faster than 85.03% of JavaScript online submissions for Find the Highest Altitude.
// Memory Usage: 38.2 MB, less than 80.27% of JavaScript online submissions for Find the Highest Altitude.

/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function (gain) {
  let max = 0
  gain.reduce((acc, cur) => {
    const now = acc + cur
    max = Math.max(max, now)
    return now
  }, 0)

  return max
}

largestAltitude([-5, 1, 5, 0, -7]) //?
largestAltitude([-4, -3, -2, -1, 4, 3, 2]) //?
