// https://leetcode.com/problems/sort-the-matrix-diagonally
// Runtime: 88 ms, faster than 47.85% of JavaScript online submissions for Sort the Matrix Diagonally.
// Memory Usage: 39 MB, less than 100.00% of JavaScript online submissions for Sort the Matrix Diagonally.
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const diagonalSort = mat => {
  const rowLen = mat.length
  const colLen = mat[0].length
  const hasNextDiagonal = (row, col) => {
    if (row + 1 >= rowLen || col + 1 >= colLen) {
      return false
    }
    return true
  }
  const sortAndMove = arr => {
    const sortedValArr = arr.map(item => item.val).sort((a, b) => a - b)
    const sortedNewArr = arr.map((item, index) => ({
      ...item,
      val: sortedValArr[index],
    }))
    sortedNewArr.map(item => {
      const {row, col, val} = item
      mat[row][col] = val
    })
  }

  // (0, 0)부터 가로로 가면서 시작~!
  for (let i = 0; i < colLen; i = i + 1 | 0) {
    let row = 0
    let col = i
    const diagonalArr = [{row, col, val: mat[row][col]}]
    while (hasNextDiagonal(row, col)) {
      row += 1
      col += 1
      diagonalArr.push({row, col, val: mat[row][col]})
    }
    sortAndMove(diagonalArr)
  }

  // (1, 0)부터 세로로 가면서 시작~!
  for (let i = 1; i < rowLen; i = i + 1 | 0) {
    let row = i
    let col = 0
    const diagonalArr = [{row, col, val: mat[row][col]}]
    while (hasNextDiagonal(row, col)) {
      row += 1
      col += 1
      diagonalArr.push({row, col, val: mat[row][col]})
    }
    sortAndMove(diagonalArr)
  }

  return mat
}
