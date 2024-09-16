// [Medium] 861. Score After Flipping Matrix
// 861_score_after_flipping_matrix

// https://leetcode.com/problems/score-after-flipping-matrix
// Runtime: 123 ms, faster than 13.64% of TypeScript online submissions for Score After Flipping Matrix.
// Memory Usage: 45.1 MB, less than 18.18% of TypeScript online submissions for Score After Flipping Matrix.

const getSum = (arr: number[]): number => {
  const arrLen = arr.length
  return arr.reduce((acc, cur, index) => acc + cur * 2 ** (arrLen - 1 - index), 0)
}

const getToggleRow = (arr: number[]): number[] => arr.map((item) => (item === 1 ? 0 : 1))

function matrixScore(grid: number[][]): number {
  const rowLen = grid.length
  const colLen = grid[0].length
  for (let row: number = 0; row < rowLen; row += 1) {
    const org = getSum(grid[row])
    const toggleRow = getToggleRow(grid[row])
    const reverse = getSum(toggleRow)
    if (org < reverse) {
      grid[row] = toggleRow
    }
  }

  for (let col: number = 0; col < colLen; col += 1) {
    let oneCount = 0
    for (let row = 0; row < rowLen; row += 1) {
      if (grid[row][col] === 1) {
        oneCount += 1
      }
    }
    if (oneCount < rowLen - oneCount) {
      for (let row: number = 0; row < rowLen; row += 1) {
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
