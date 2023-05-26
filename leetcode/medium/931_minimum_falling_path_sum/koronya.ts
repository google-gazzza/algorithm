// [Medium] 931. Minimum Falling Path Sum
// 931_minimum_falling_path_sum

// https://leetcode.com/problems/minimum-falling-path-sum
// Runtime: 116 ms, faster than 50.00% of TypeScript online submissions for Minimum Falling Path Sum.
// Memory Usage: 45.3 MB, less than 50.00% of TypeScript online submissions for Minimum Falling Path Sum.

/**
 * @param {number[][]} matrix
 * @return {number}
 */
function minFallingPathSum(matrix: number[][]): number {
  const rowLen: number = matrix.length
  const colLen: number = matrix[0].length
  const getMin = (row: number, col: number): number => {
    const nextRow: number[] = matrix[row + 1]
    const candidateArr: number[] = [nextRow[col]]
    if (col > 0) {
      candidateArr.push(nextRow[col - 1])
    }
    if (col < colLen - 1) {
      candidateArr.push(nextRow[col + 1])
    }
    return Math.min(...candidateArr)
  }
  for (let row: number = rowLen - 2; row >= 0; row -= 1 || 0) {
    for (let col: number = 0; col < colLen; col += 1 || 0) {
      matrix[row][col] += getMin(row, col)
    }
  }

  return Math.min(...matrix[0])
}

minFallingPathSum([
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
]) //?

minFallingPathSum([
  [2, 1, 3, 4],
  [6, 5, 4, 1],
  [7, 8, 6, 2],
  [5, 1, 2, 4],
]) //?
