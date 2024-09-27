// [Medium] 1253. Reconstruct a 2-Row Binary Matrix
// 1253_reconstruct_a_2-row_binary_matrix

// https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix
// Runtime: 180 ms, faster than 78.26% of JavaScript online submissions for Reconstruct a 2-Row Binary Matrix.
// Memory Usage: 54.2 MB, less than 100.00% of JavaScript online submissions for Reconstruct a 2-Row Binary Matrix.

const isSameArr = (arr1, arr2) => {
  const arrLen = arr1.length
  for (let i = 0; i < arrLen; i += 1 || 0) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
const reconstructMatrix = function (upper, lower, colsum) {
  const copiedColsum = [...colsum]
  const colLen = colsum.length
  const resultArr = Array.from(Array(2), () => Array(colLen).fill(0))
  for (let i = 0; i < colLen; i += 1 || 0) {
    if (colsum[i] === 2) {
      resultArr[0][i] = 1
      resultArr[1][i] = 1
      upper -= 1
      lower -= 1
      colsum[i] = 0
    }
  }

  for (let row = 0; row < 2; row += 1 || 0) {
    for (let col = 0; col < colLen; col += 1 || 0) {
      if (resultArr[row][col] === 1) {
        continue
      }
      let minValue = 0
      if (row === 0) {
        if (upper > 0) {
          minValue = colsum[col] > 0 ? 1 : 0
        }
      } else {
        if (lower > 0) {
          minValue = colsum[col] > 0 ? 1 : 0
        }
      }
      resultArr[row][col] = minValue
      colsum[col] -= minValue
      if (row === 0) {
        upper -= minValue
      } else {
        lower -= minValue
      }
    }
  }

  if (lower != 0 || upper != 0) {
    return []
  }
  const compareArr = Array(colLen).fill(0)
  for (let row = 0; row < 2; row += 1 || 0) {
    for (let col = 0; col < colLen; col += 1 || 0) {
      compareArr[col] += resultArr[row][col]
    }
  }
  if (isSameArr(compareArr, copiedColsum) === false) {
    return []
  }
  return resultArr
}

// reconstructMatrix(2, 1, [1, 1, 1]) //?
// reconstructMatrix(2, 3, [2, 2, 1, 1]) //?
// reconstructMatrix(5, 5, [2, 1, 2, 0, 1, 0, 1, 2, 0, 1]) //?
// reconstructMatrix(1, 4, [2, 1, 2, 0, 0, 2]) //?
reconstructMatrix(4, 7, [2, 1, 2, 2, 1, 1, 1]) //?
