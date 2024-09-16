// [Medium] 74. Search a 2D Matrix
// 74_search_a_2d_matrix

// Runtime: 72 ms, faster than 94.01% of JavaScript online submissions for Search a 2D Matrix.
// Memory Usage: 40 MB, less than 7.51% of JavaScript online submissions for Search a 2D Matrix.
const colSet = new Set()

const searchMatrix = (matrix, target) => {
  matrix.forEach(row => {
    row.forEach(col => {
      colSet.add(col)
    })
  })

  return colSet.has(target)
}


// https://leetcode.com/problems/search-a-2d-matrix
// Runtime: 76 ms, faster than 81.72% of JavaScript online submissions for Search a 2D Matrix.
// Memory Usage: 38.8 MB, less than 7.51% of JavaScript online submissions for Search a 2D Matrix.
const getFindRowIndex2 = (arr, target) => {
  const arrLen = arr.length
  for (let i = 1; i < arrLen; i++) {
    if (arr[i] > target) {
      return i - 1
    }
  }
  return arrLen - 1
}

const searchMatrix2 = (matrix, target) => {
  const rowLen = matrix.length
  if (rowLen === 0) {
    return false
  }
  const firstColumnArr = []
  for (let i = 0; i < rowLen; i += 1 | 0) {
    firstColumnArr.push(matrix[i][0])
  }
  const rowIndex = getFindRowIndex2(firstColumnArr, target)
  const colLen = matrix[0].length
  for (let i = 0; i < colLen; i += 1 | 0) {
    const num = matrix[rowIndex][i]
    if (num > target) {
      return false
    } else if (num === target) {
      return true
    }
  }

  return false
}


const getFindRowIndex3 = (arr, target) => {
  const arrLen = arr.length
  for (let i = 1; i < arrLen; i++) {
    if (arr[i] > target) {
      return i - 1
    }
  }
  return arrLen - 1
}

const searchMatrix3 = (matrix, target) => {
  const rowLen = matrix.length
  if (rowLen === 0) {
    return false
  }
  const firstColumnArr = []
  for (let i = 0; i < rowLen; i += 1 | 0) {
    firstColumnArr.push(matrix[i][0])
  }
  const findRow = getFindRowIndex3(firstColumnArr, target)

  return matrix[findRow].includes(target)
}
