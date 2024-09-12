// [Medium] 2225. Find Players With Zero or One Losses
// 2225_find_players_with_zero_or_one_losses

// https://leetcode.com/problems/find-players-with-zero-or-one-losses
// Runtime: 425 ms, faster than 93.79% of JavaScript online submissions for Find Players With Zero or One Losses.
// Memory Usage: 84.6 MB, less than 94.97% of JavaScript online submissions for Find Players With Zero or One Losses.

const ascSort = (a, b) => a - b

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
const findWinners = function (matches) {
  const winSet = new Set()
  const loseSet = new Set()
  const multipleLoseSet = new Set()

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

findWinners([
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [4, 9],
  [10, 4],
  [10, 9],
])
findWinners([
  [2, 3],
  [1, 3],
  [5, 4],
  [6, 4],
])
