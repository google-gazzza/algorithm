// [Easy] 1582. Special Positions in a Binary Matrix
// 1582_special_positions_in_a_binary_matrix

// https://leetcode.com/problems/special-positions-in-a-binary-matrix
// Runtime: 92 ms, faster than 100.00% of TypeScript online submissions for Special Positions in a Binary Matrix.
// Memory Usage: 41.4 MB, less than 100.00% of TypeScript online submissions for Special Positions in a Binary Matrix.

/**
 * @param {number[][]} mat
 * @return {number}
 */
function numSpecial(mat: number[][]): number {
  let specialCount: number = 0
  const rowLen: number = mat.length
  const colLen: number = mat[0].length
  const rowMap = new Map<number, number>()
  const colMap = new Map<number, number>()
  for (let row: number = 0; row < rowLen; row += 1) {
    let count: number = 0
    let index: number = -1
    for (let col: number = 0; col < colLen; col += 1) {
      if (mat[row][col] === 1) {
        count += 1
        index = col
      }
    }
    const result: number = count === 1 ? index : -1
    rowMap.set(row, result)
  }
  for (let col: number = 0; col < colLen; col += 1) {
    let count: number = 0
    let index: number = -1
    for (let row: number = 0; row < rowLen; row += 1) {
      if (mat[row][col] === 1) {
        count += 1
        index = row
      }
    }
    const result: number = count === 1 ? index : -1
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
