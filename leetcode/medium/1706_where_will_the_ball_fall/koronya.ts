// [Medium] 1706. Where Will the Ball Fall
// 1706_where_will_the_ball_fall

// https://leetcode.com/problems/where-will-the-ball-fall
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Where Will the Ball Fall.
// Memory Usage: 41.4 MB, less than 66.67% of TypeScript online submissions for Where Will the Ball Fall.

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
function findBall(grid: number[][]): number[] {
  const gridLen: number = grid.length
  const ballLen: number = grid[0].length
  const resultArr: number[] = Array.from({ length: ballLen })
  for (let i: number = 0; i < ballLen; i += 1) {
    let answer: number = i
    for (let j: number = 0; j < gridLen; j += 1) {
      let direction: number = grid[j][answer]
      if (direction === grid[j][answer + direction]) {
        answer += direction
      } else {
        answer = -1
        break
      }
    }
    resultArr[i] = answer
  }
  return resultArr
}

findBall([
  [1, 1, 1, -1, -1],
  [1, 1, 1, -1, -1],
  [-1, -1, -1, 1, 1],
  [1, 1, 1, 1, -1],
  [-1, -1, -1, -1, -1],
]) //?
findBall([[-1]]) //?
findBall([
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
]) //?
