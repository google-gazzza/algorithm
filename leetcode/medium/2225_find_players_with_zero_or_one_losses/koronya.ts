// [Medium] 2225. Find Players With Zero or One Losses
// 2225_find_players_with_zero_or_one_losses

// https://leetcode.com/problems/find-players-with-zero-or-one-losses
// Runtime: 483 ms, faster than 90.63% of TypeScript online submissions for Find Players With Zero or One Losses.
// Memory Usage: 84.4 MB, less than 96.88% of TypeScript online submissions for Find Players With Zero or One Losses.

const ascSort = (a: number, b: number): number => a - b

function findWinners(matches: number[][]): number[][] {
  const winSet = new Set<number>()
  const loseSet = new Set<number>()
  const multipleLoseSet = new Set<number>()

  matches.forEach(([win, lose]) => {
    if (multipleLoseSet.has(win) === false) {
      if (loseSet.has(win) === false) {
        winSet.add(win)
      }
    }
    if (multipleLoseSet.has(lose) === false) {
      if (loseSet.has(lose) === true) {
        multipleLoseSet.add(lose)
        loseSet.delete(lose)
      } else if (winSet.has(lose) === true) {
        loseSet.add(lose)
        winSet.delete(lose)
      } else {
        loseSet.add(lose)
      }
    }
  })

  return [[...winSet].sort(ascSort), [...loseSet].sort(ascSort)]
}
