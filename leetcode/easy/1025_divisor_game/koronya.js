// https://leetcode.com/problems/divisor-game/
// Runtime: 44 ms, faster than 97.04% of JavaScript online submissions for Divisor Game.
// Memory Usage: 33.8 MB, less than 80.00% of JavaScript online submissions for Divisor Game.
const divisorGame = N => N % 2 === 0

// Runtime: 44 ms, faster than 97.04% of JavaScript online submissions for Divisor Game.
// Memory Usage: 33.9 MB, less than 40.00% of JavaScript online submissions for Divisor Game.
const divisorGame2 = N => {
  let target = N
  let isAliceWin = false
  while (target > 1) {
    target -= 1
    isAliceWin = !isAliceWin
  }

  return isAliceWin
}
