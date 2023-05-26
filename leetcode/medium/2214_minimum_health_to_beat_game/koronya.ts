// [Medium] 2214. Minimum Health to Beat Game
// 2214_minimum_health_to_beat_game

// https://leetcode.com/problems/minimum-health-to-beat-game
// Runtime: 151 ms, faster than 7.69% of TypeScript online submissions for Minimum Health to Beat Game.
// Memory Usage: 54.8 MB, less than 61.54% of TypeScript online submissions for Minimum Health to Beat Game.

function minimumHealth(damage: number[], armor: number): number {
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
