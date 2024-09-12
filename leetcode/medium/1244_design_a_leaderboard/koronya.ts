// [Medium] 1244. Design A Leaderboard
// 1244_design_a_leaderboard

// https://leetcode.com/problems/design-a-leaderboard
// Runtime: 166 ms, faster than 22.22% of TypeScript online submissions for Design A Leaderboard.
// Memory Usage: 44.9 MB, less than 44.44% of TypeScript online submissions for Design A Leaderboard.

class Leaderboard {
  scoreMap: Map<number, number>
  constructor() {
    this.scoreMap = new Map()
  }

  addScore(playerId: number, score: number): void {
    const prevScore: number = this.scoreMap.get(playerId) || 0
    this.scoreMap.set(playerId, prevScore + score)
  }

  top(K: number): number {
    return [...this.scoreMap]
      .sort((a, b) => b[1] - a[1])
      .slice(0, K)
      .reduce((acc, cur) => acc + cur[1], 0)
  }

  reset(playerId: number): void {
    this.scoreMap.delete(playerId)
  }
}
