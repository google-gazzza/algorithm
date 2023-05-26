// [Medium] 1476. Subrectangle Queries
// 1476_subrectangle_queries

// https://leetcode.com/problems/subrectangle-queries
// Runtime: 100 ms, faster than 94.57% of JavaScript online submissions for Subrectangle Queries.
// Memory Usage: 45 MB, less than 27.52% of JavaScript online submissions for Subrectangle Queries.
const SubrectangleQueries = function (rectangle) {
  this.matrix = rectangle
}

SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) {
  for (let row = row1; row <= row2; row += 1 || 0) {
    for (let col = col1; col <= col2; col += 1 || 0) {
      this.matrix[row][col] = newValue
    }
  }
}

SubrectangleQueries.prototype.getValue = function (row, col) {
  return this.matrix[row][col]
}
