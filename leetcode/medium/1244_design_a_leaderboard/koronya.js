// [Medium] 1244. Design A Leaderboard
// 1244_design_a_leaderboard

// https://leetcode.com/problems/design-a-leaderboard
// Runtime: 179 ms, faster than 21.30% of JavaScript online submissions for Design A Leaderboard.
// Memory Usage: 44.5 MB, less than 43.52% of JavaScript online submissions for Design A Leaderboard.

const Leaderboard = function () {
  this.scoreMap = new Map()
}

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function (playerId, score) {
  const prevScore = this.scoreMap.get(playerId) || 0
  this.scoreMap.set(playerId, prevScore + score)
}

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function (K) {
  return [...this.scoreMap]
    .sort((a, b) => b[1] - a[1])
    .slice(0, K)
    .reduce((acc, cur) => acc + cur[1], 0)
}
/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
  this.scoreMap.delete(playerId)
}

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */

// const leaderboard = new Leaderboard()
// leaderboard.addScore(1, 73)
// leaderboard.addScore(2, 56)
// leaderboard.addScore(3, 39)
// leaderboard.addScore(4, 51)
// leaderboard.addScore(5, 4)
// leaderboard.top(1) //?
// leaderboard.reset(1)
// leaderboard.reset(2)
// leaderboard.addScore(2, 51)
// leaderboard.top(3) //?

const leaderboard = new Leaderboard()
leaderboard.addScore(1, 13)
leaderboard.addScore(2, 93)
leaderboard.addScore(3, 84)
leaderboard.addScore(4, 6)
leaderboard.addScore(5, 89)
leaderboard.addScore(6, 31)
leaderboard.addScore(7, 7)
leaderboard.addScore(8, 1)
leaderboard.addScore(9, 98)
leaderboard.addScore(10, 42)

leaderboard.top(5) //?
leaderboard.reset(1)
leaderboard.reset(2)
leaderboard.addScore(3, 76)
leaderboard.addScore(4, 68)
leaderboard.top(1) //?
