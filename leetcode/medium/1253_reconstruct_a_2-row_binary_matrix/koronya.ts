// [Medium] 1253. Reconstruct a 2-Row Binary Matrix
// 1253_reconstruct_a_2-row_binary_matrix

// https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix
// Runtime: 188 ms, faster than 100.00% of TypeScript online submissions for Reconstruct a 2-Row Binary Matrix.
// Memory Usage: 54.5 MB, less than 100.00% of TypeScript online submissions for Reconstruct a 2-Row Binary Matrix.

const isSameArr = (arr1: number[], arr2: number[]): boolean => {
  const arrLen: number = arr1.length
  for (let i: number = 0; i < arrLen; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

function reconstructMatrix(upper: number, lower: number, colsum: number[]): number[][] {
  const copiedColsum: number[] = [...colsum]
  const colLen: number = colsum.length
  const resultArr: number[][] = Array.from(Array(2), () => Array(colLen).fill(0))
  for (let i: number = 0; i < colLen; i += 1) {
    if (colsum[i] === 2) {
      resultArr[0][i] = 1
      resultArr[1][i] = 1
      upper -= 1
      lower -= 1
      colsum[i] = 0
    }
  }

  for (let row: number = 0; row < 2; row += 1) {
    for (let col: number = 0; col < colLen; col += 1) {
      if (resultArr[row][col] === 1) {
        continue
      }
      let minValue: number = 0
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
  const compareArr: number[] = Array(colLen).fill(0)
  for (let row: number = 0; row < 2; row += 1) {
    for (let col: number = 0; col < colLen; col += 1) {
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
