// [Easy] 812. Largest Triangle Area
// 812_largest_triangle_area

// https://leetcode.com/problems/largest-triangle-area
// Runtime: 76 ms, faster than 100.00% of JavaScript online submissions for Largest Triangle Area.
// Memory Usage: 44.9 MB, less than 7.14% of JavaScript online submissions for Largest Triangle Area.
const getArea = arr => {
  const a = arr[0][0]
  const b = arr[0][1]
  const c = arr[1][0]
  const d = arr[1][1]
  const e = arr[2][0]
  const f = arr[2][1]

  return Math.abs((a * d + c * f + e * b) - (c * b + e * d + a * f)) / 2
}

const largestTriangleArea = points => {
  const pointsLen = points.length
  let maxArea = 0
  const dfs = (arr, start) => {
    if (start > pointsLen) {
      return
    }
    if (arr.length === 3) {
      maxArea = Math.max(maxArea, getArea(arr))
    } else {
      for (let i = start; i < pointsLen; i = i + 1 | 0) {
        dfs([...arr, points[i]], i + 1)
      }
    }
  }
  for (let i = 0; i < pointsLen - 2; i = i + 1 | 0) {
    dfs([points[i]], i + 1)
  }

  return maxArea
}
