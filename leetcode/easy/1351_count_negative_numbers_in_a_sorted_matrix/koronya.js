// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix
// Runtime: 48 ms, faster than 98.19% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
// Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
const countNegatives = grid => {
  const rowLen = grid.length
  const colLen = grid[0].length
  let count = 0

  for (let i = 0; i < rowLen; i = i + 1 | 0) {
    for (let j = 0; j < colLen; j = j + 1 | 0) {
      if (grid[i][j] < 0) {
        count += colLen - j
        break
      }
    }
  }

  return count
}

// 무식하게 해도 속도는 빠르네 -_-;
// 문제가 워낙 단순해서 그런가...
// Runtime: 48 ms, faster than 98.19% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
// Memory Usage: 35.7 MB, less than 100.00% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
const countNegatives2 = grid => {
  const rowLen = grid.length
  const colLen = grid[0].length
  let count = 0

  for (let i = 0; i < rowLen; i = i + 1 | 0) {
    for (let j = 0; j < colLen; j = j + 1 | 0) {
      if (grid[i][j] < 0) {
        count += 1
      }
    }
  }

  return count
}
