// [Medium] 120. Triangle
// 120_triangle

// https://leetcode.com/problems/triangle
// Runtime: 80 ms, faster than 79.69% of TypeScript online submissions for Triangle.
// Memory Usage: 41.5 MB, less than 14.06% of TypeScript online submissions for Triangle.

function minimumTotal(triangle: number[][]): number {
  const height: number = triangle.length
  let prevSumArr: number[] = triangle[height - 1]
  for (let row: number = height - 2; row >= 0; row -= 1) {
    const colArr: number[] = triangle[row]
    const colLen: number = colArr.length
    const nowSumArr: number[] = []
    for (let col: number = 0; col < colLen; col += 1) {
      nowSumArr.push(Math.min(prevSumArr[col], prevSumArr[col + 1]) + colArr[col])
    }
    prevSumArr = nowSumArr
  }

  return prevSumArr[0]
}
