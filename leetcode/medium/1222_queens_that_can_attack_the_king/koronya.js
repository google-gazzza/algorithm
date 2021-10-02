// https://leetcode.com/problems/queens-that-can-attack-the-king
// Runtime: 52 ms, faster than 87.84% of JavaScript online submissions for Queens That Can Attack the King.
// Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for Queens That Can Attack the King.
const getAdjustArr = (arr, kingVal, isVertical = false) => {
  const plusArr = []
  const minusArr = []
  for (let i = arr.length - 1; i >= 0; i = i - 1 | 0) {
    const item = arr[i]
    const itemVal = isVertical ? item[0] : item[1]
    if (itemVal > kingVal) {
      plusArr.push(item)
    } else if (itemVal < kingVal) {
      minusArr.push(item)
    }
  }
  const plus = plusArr.pop()
  const minus = minusArr.shift()

  return [plus, minus]
}

const getValidArr = arr => arr.reduce((acc, cur) => [...acc, ...cur.filter(element => element != null)], [])

const queensAttacktheKing = (queens, king) => {
  const [kingRow, kingCol] = king
  const sameRowArr = queens.filter(queen => queen[0] === kingRow)
  const sameColArr = queens.filter(queen => queen[1] === kingCol)
  const plusDiagonalArr = queens.filter(queen => (kingRow - queen[0]) / (kingCol - queen[1]) === 1)
  const minusDiagonalArr = queens.filter(queen => (kingRow - queen[0]) / (kingCol - queen[1]) === -1)
  sameRowArr.sort((a, b) => a[1] - b[1])
  sameColArr.sort((a, b) => a[0] - b[0])
  plusDiagonalArr.sort((a, b) => a[1] - b[1])
  minusDiagonalArr.sort((a, b) => a[1] - b[1])

  return getValidArr([
    getAdjustArr(sameRowArr, kingCol),
    getAdjustArr(sameColArr, kingRow, true),
    getAdjustArr(plusDiagonalArr, kingCol),
    getAdjustArr(minusDiagonalArr, kingCol),
  ])
}
