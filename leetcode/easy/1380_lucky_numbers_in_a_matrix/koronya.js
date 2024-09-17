// https://leetcode.com/problems/lucky-numbers-in-a-matrix
// Runtime: 56 ms, faster than 91.24% of JavaScript online submissions for Lucky Numbers in a Matrix.
// Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions for Lucky Numbers in a Matrix.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = matrix => {
  const rowLen = matrix.length
  const colLen = matrix[0].length
  const candidateArr = []
  const resultArr = []

  for (let row = 0; row < rowLen; row = row + 1 | 0) {
    let min = Number.MAX_SAFE_INTEGER
    let minColIndex = -1
    for (let col = 0; col < colLen; col = col + 1 | 0) {
      const num = matrix[row][col]
      if (num < min) {
        min = num
        minColIndex = col
      }
    }
    candidateArr.push({min, minColIndex})
  }

  candidateArr.map(candidateInfo => {
    const {min, minColIndex} = candidateInfo
    let isLuckyNumber = true
    for (let row = 0; row < rowLen; row = row + 1 | 0) {
      if (matrix[row][minColIndex] > min) {
        isLuckyNumber = false
        break
      }
    }
    if (isLuckyNumber === true) {
      resultArr.push(min)
    }
  })

  return resultArr
}
