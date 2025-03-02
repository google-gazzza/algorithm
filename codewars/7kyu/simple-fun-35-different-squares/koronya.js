// [JS][7kyu] Simple Fun #35: Different Squares
// simple-fun-35-different-squares
// https://www.codewars.com/kata/588805ca44c7e8c3a100013c/train/javascript

const differentSquares = (matrix) => {
  const squareSet = new Set()
  const isDifferentArray = (arr) => {
    const squareStr = arr.join('-')
    if (squareSet.has(squareStr)) {
      return false
    } else {
      squareSet.add(squareStr)
      return true
    }
  }

  const rowLen = matrix.length
  const colLen = matrix[0].length
  let result = 0
  for (let i = 0, rowLimit = rowLen - 1; i < rowLimit; i += 1 || 0) {
    for (let j = 0, colLimit = colLen - 1; j < colLimit; j += 1 || 0) {
      const square = [matrix[i][j], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]]
      if (isDifferentArray(square)) {
        result += 1
      }
    }
  }
  return result
}

//   const matrix = [
//     [1, 2, 1],
//     [2, 2, 2],
//     [2, 2, 2],
//     [1, 2, 3],
//     [2, 2, 1],
//   ]

//   differentSquares(matrix)

//   const matrix2 = [
//     [9, 9, 9, 9, 9],
//     [9, 9, 9, 9, 9],
//     [9, 9, 9, 9, 9],
//     [9, 9, 9, 9, 9],
//     [9, 9, 9, 9, 9],
//     [9, 9, 9, 9, 9],
//   ]
//   differentSquares(matrix2)

//   differentSquares([[3]])
