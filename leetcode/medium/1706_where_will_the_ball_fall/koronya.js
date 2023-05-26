// [Medium] 1706. Where Will the Ball Fall
// 1706_where_will_the_ball_fall

// https://leetcode.com/problems/where-will-the-ball-fall
// Runtime: 76 ms, faster than 89.17% of JavaScript online submissions for Where Will the Ball Fall.
// Memory Usage: 41.3 MB, less than 43.33% of JavaScript online submissions for Where Will the Ball Fall.

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = function (grid) {
  const gridLen = grid.length
  const ballLen = grid[0].length
  const resultArr = Array.from({ length: ballLen })
  for (let i = 0; i < ballLen; i += 1 || 0) {
    let answer = i
    for (let j = 0; j < gridLen; j += 1 || 0) {
      let direction = grid[j][answer]
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
