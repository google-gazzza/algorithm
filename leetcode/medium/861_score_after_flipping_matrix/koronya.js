// [Medium] 861. Score After Flipping Matrix
// 861_score_after_flipping_matrix

// https://leetcode.com/problems/score-after-flipping-matrix
// Runtime: 133 ms, faster than 8.33% of JavaScript online submissions for Score After Flipping Matrix.
// Memory Usage: 43.7 MB, less than 20.83% of JavaScript online submissions for Score After Flipping Matrix.

const getSum = (arr) => {
  const arrLen = arr.length
  return arr.reduce((acc, cur, index) => acc + cur * 2 ** (arrLen - 1 - index), 0)
}

const getToggleRow = (arr) => arr.map((item) => (item === 1 ? 0 : 1))

/**
 * @param {number[][]} grid
 * @return {number}
 */
const matrixScore = function (grid) {
  const rowLen = grid.length
  const colLen = grid[0].length
  for (let row = 0; row < rowLen; row += 1 || 0) {
    const org = getSum(grid[row])
    const toggleRow = getToggleRow(grid[row])
    const reverse = getSum(toggleRow)
    if (org < reverse) {
      grid[row] = toggleRow
    }
  }

  for (let col = 0; col < colLen; col += 1 || 0) {
    let oneCount = 0
    for (let row = 0; row < rowLen; row += 1 || 0) {
      if (grid[row][col] === 1) {
        oneCount += 1
      }
    }
    if (oneCount < rowLen - oneCount) {
      for (let row = 0; row < rowLen; row += 1 || 0) {
        if (grid[row][col] === 1) {
          grid[row][col] = 0
        } else {
          grid[row][col] = 1
        }
      }
    }
  }

  return grid.reduce((acc, cur) => acc + getSum(cur), 0)
}

matrixScore([
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0],
])

matrixScore([[0]])
matrixScore([[0], [1]])
