// [Medium] 1476. Subrectangle Queries
// 1476_subrectangle_queries

// https://leetcode.com/problems/subrectangle-queries
// Runtime: 104 ms, faster than 90.00% of TypeScript online submissions for Subrectangle Queries.
// Memory Usage: 45.6 MB, less than 30.00% of TypeScript online submissions for Subrectangle Queries.
class SubrectangleQueries {
  matrix: number[][]
  constructor(rectangle: number[][]) {
    this.matrix = rectangle
  }

  updateSubrectangle(row1: number, col1: number, row2: number, col2: number, newValue: number): void {
    for (let row: number = row1; row <= row2; row += 1) {
      for (let col: number = col1; col <= col2; col += 1) {
        this.matrix[row][col] = newValue
      }
    }
  }

  getValue(row: number, col: number): number {
    return this.matrix[row][col]
  }
}
