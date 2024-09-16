// [Easy] 1582. Special Positions in a Binary Matrix
// 1582_special_positions_in_a_binary_matrix

// https://leetcode.com/problems/special-positions-in-a-binary-matrix
// Runtime: 88 ms, faster than 64.71% of JavaScript online submissions for Special Positions in a Binary Matrix.
// Memory Usage: 41 MB, less than 42.65% of JavaScript online submissions for Special Positions in a Binary Matrix.

/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = function (mat) {
  let specialCount = 0
  const rowLen = mat.length
  const colLen = mat[0].length
  const rowMap = new Map()
  const colMap = new Map()
  for (let row = 0; row < rowLen; row += 1 || 0) {
    let count = 0
    let index = -1
    for (let col = 0; col < colLen; col += 1 || 0) {
      if (mat[row][col] === 1) {
        count += 1
        index = col
      }
    }
    const result = count === 1 ? index : -1
    rowMap.set(row, result)
  }
  for (let col = 0; col < colLen; col += 1 || 0) {
    let count = 0
    let index = -1
    for (let row = 0; row < rowLen; row += 1 || 0) {
      if (mat[row][col] === 1) {
        count += 1
        index = row
      }
    }
    const result = count === 1 ? index : -1
    colMap.set(col, result)
  }
  for (const rowInfo of rowMap) {
    const [row, index] = rowInfo
    if (colMap.get(index) === row) {
      specialCount += 1
    }
  }

  return specialCount
}

numSpecial([
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0],
]) //?

numSpecial([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]) //?

numSpecial([
  [0, 0, 0, 1],
  [1, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
]) //?
