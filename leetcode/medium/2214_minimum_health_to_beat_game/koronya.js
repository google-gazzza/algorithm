// [Medium] 2214. Minimum Health to Beat Game
// 2214_minimum_health_to_beat_game

// https://leetcode.com/problems/minimum-health-to-beat-game
// Runtime: 125 ms, faster than 40.74% of JavaScript online submissions for Minimum Health to Beat Game.
// Memory Usage: 54.4 MB, less than 24.07% of JavaScript online submissions for Minimum Health to Beat Game.

/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
const minimumHealth = function (damage, armor) {
  const max = Math.max(...damage)
  const sum = damage.reduce((acc, cur) => acc + cur, 0)
  const diff = max > armor ? armor : max

  return sum - diff + 1
}

minimumHealth([2, 7, 4, 3], 4)
minimumHealth([2, 5, 3, 4], 7)
minimumHealth([3, 3, 3], 0)
minimumHealth([3, 3, 3], 1)
minimumHealth([3, 3, 3], 5)
