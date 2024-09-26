// https://leetcode.com/problems/spiral-matrix-iii
// Runtime: 88 ms, faster than 100.00% of JavaScript online submissions for Spiral Matrix III.
// Memory Usage: 42.9 MB, less than 100.00% of JavaScript online submissions for Spiral Matrix III.
const spiralMatrixIII = (R, C, r0, c0) => {
  let restCount = R * C
  const resultArr = []
  const insertValidValue = (row, col) => {
    if (row >= R || col >= C || row < 0 || col < 0) {
      return
    }
    resultArr.push([row, col])
    restCount -= 1
  }
  const doN = (n, isRight, row, col) => {
    const change = isRight === true ? n : -n
    if (isRight === true) {
      for (let i = 1; i <= n; i = i + 1 | 0) {
        insertValidValue(row, col + i)
      }
      for (let i = 1; i <= n; i = i + 1 | 0) {
        insertValidValue(row + i, col + change)
      }
    } else {
      for (let i = 1; i <= n; i = i + 1 | 0) {
        insertValidValue(row, col - i)
      }
      for (let i = 1; i <= n; i = i + 1 | 0) {
        insertValidValue(row - i, col + change)
      }
    }
    return {
      n: n + 1,
      isRight: !isRight,
      row: row + change,
      col: col + change,
    }
  }

  insertValidValue(r0, c0)
  let {n, isRight, row, col} = doN(1, true, r0, c0)
  while (restCount > 0) {
    const result = doN(n, isRight, row, col)
    n = result.n
    isRight = result.isRight
    row = result.row
    col = result.col
  }

  return resultArr
}
