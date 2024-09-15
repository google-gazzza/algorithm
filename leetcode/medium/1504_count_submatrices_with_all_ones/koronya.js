// [Medium] 1504. Count Submatrices With All Ones
// 1504_count_submatrices_with_all_ones

// https://leetcode.com/problems/count-submatrices-with-all-ones
// Runtime: 136 ms, faster than 12.07% of JavaScript online submissions for Count Submatrices With All Ones.
// Memory Usage: 41.6 MB, less than 37.93% of JavaScript online submissions for Count Submatrices With All Ones.

/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSubmat = function (mat) {
  const rowLen = mat.length
  const colLen = mat[0].length
  let result = 0
  const valid = (row, col) => row < rowLen && col < colLen && mat[row][col] === 1
  const check = (row, col) => {
    let lastValidRowIndex = -1
    let lastValidColIndex = -1
    if (valid(row, col) === false) {
      return
    }
    result += 1
    for (let i = row + 1; i < rowLen; i += 1 || 0) {
      if (valid(i, col) === true) {
        lastValidRowIndex = i
        result += 1
      } else {
        break
      }
    }
    for (let i = col + 1; i < colLen; i += 1 || 0) {
      if (valid(row, i) === true) {
        lastValidColIndex = i
        result += 1
      } else {
        break
      }
    }
    for (let i = row; i <= lastValidRowIndex; i += 1 || 0) {
      for (let j = col; j <= lastValidColIndex; j += 1 || 0) {
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

  for (let row = 0; row < rowLen; row += 1 || 0) {
    for (let col = 0; col < colLen; col += 1 || 0) {
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
