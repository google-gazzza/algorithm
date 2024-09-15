// [Medium] 1504. Count Submatrices With All Ones
// 1504_count_submatrices_with_all_ones

// https://leetcode.com/problems/count-submatrices-with-all-ones
// Runtime: 136 ms, faster than 40.00% of TypeScript online submissions for Count Submatrices With All Ones.
// Memory Usage: 41.6 MB, less than 20.00% of TypeScript online submissions for Count Submatrices With All Ones.


/**
 * @param {number[][]} mat
 * @return {number}
 */
function numSubmat(mat: number[][]): number {
  const rowLen: number = mat.length
  const colLen: number = mat[0].length
  let result: number = 0
  const valid = (row: number, col: number): boolean => row < rowLen && col < colLen && mat[row][col] === 1
  const check = (row: number, col: number): void => {
    let lastValidRowIndex: number = -1
    let lastValidColIndex: number = -1
    if (valid(row, col) === false) {
      return
    }
    result += 1
    for (let i: number = row + 1; i < rowLen; i += 1) {
      if (valid(i, col) === true) {
        lastValidRowIndex = i
        result += 1
      } else {
        break
      }
    }
    for (let i: number = col + 1; i < colLen; i += 1) {
      if (valid(row, i) === true) {
        lastValidColIndex = i
        result += 1
      } else {
        break
      }
    }
    for (let i: number = row; i <= lastValidRowIndex; i += 1) {
      for (let j = col; j <= lastValidColIndex; j += 1) {
        if (row !== i && col !== j) {
          if (valid(i, j) === true) {
            result += 1
          } else {
            lastValidColIndex = j - 1
          }
        }
      }
    }
  }

  for (let row: number = 0; row < rowLen; row += 1) {
    for (let col: number = 0; col < colLen; col += 1) {
      check(row, col)
    }
  }

  return result
}

numSubmat([
  [1, 0, 1],
  [1, 1, 0],
  [1, 1, 0],
]) //?

numSubmat([
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 1, 1, 0],
]) //?

numSubmat([
  [0, 1],
  [1, 1],
  [1, 0],
]) //?

numSubmat([
  [1, 1, 1, 1, 0],
  [1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1],
  [0, 1, 0, 0, 0],
]) //?
