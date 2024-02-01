// https://leetcode.com/problems/robot-return-to-origin
// Runtime: 56 ms, faster than 97.05% of JavaScript online submissions for Robot Return to Origin.
// Memory Usage: 35.5 MB, less than 66.67% of JavaScript online submissions for Robot Return to Origin.
const judgeCircle = moves => {
  let xAxis = 0
  let yAxis = 0
  const movesLen = moves.length

  for (let i = 0; i < movesLen; i += 1) {
    switch (moves[i]) {
      case 'L':
        xAxis -= 1
        break
      case 'R':
        xAxis += 1
        break
      case 'U':
        yAxis += 1
        break
      case 'D':
        yAxis -= 1
        break
      default:
        break
    }
  }
  
  return xAxis === 0 && yAxis === 0
}
