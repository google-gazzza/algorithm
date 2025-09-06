// [JS][7kyu] Magic Square Validator
// magic-square-validator
// https://www.codewars.com/kata/57be6a612eaf7cc3af000178/train/javascript

const isMagical = (square) => {
  const numSet = new Set(square)
  if (numSet.size !== 9) {
    return false
  }

  const MUST_SUM = 15
  const rowArr = [square.slice(0, 3), square.slice(3, 6), square.slice(6, 9)]
  const colArr = [
    [square[0], square[3], square[6]],
    [square[1], square[4], square[7]],
    [square[2], square[5], square[8]],
  ]
  const diagonalArr1 = [square[0], square[4], square[8]]
  const diagonalArr2 = [square[2], square[4], square[6]]
  const allLines = [...rowArr, ...colArr, diagonalArr1, diagonalArr2]

  return allLines.every((line) => line.reduce((a, b) => a + b, 0) === MUST_SUM)
}

// isMagical([4, 9, 2, 3, 5, 7, 8, 1, 6]) === true
// isMagical([4, 9, 2, 3, 5, 7, 8, 6, 1]) === false
// isMagical([4, 5, 2, 3, 9, 7, 8, 1, 6]) === false
// isMagical([5, 5, 5, 5, 5, 5, 5, 5, 5]) === false
