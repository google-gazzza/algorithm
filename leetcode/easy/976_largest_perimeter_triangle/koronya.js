// [Easy] 976. Largest Perimeter Triangle
// 976_largest_perimeter_triangle

// https://leetcode.com/problems/largest-perimeter-triangle
// Runtime: 108 ms, faster than 70.33% of JavaScript online submissions for Largest Perimeter Triangle.
// Memory Usage: 42 MB, less than 8.79% of JavaScript online submissions for Largest Perimeter Triangle.
const largestPerimeter = A => {
  const limit = A.length - 2
  A.sort((a, b) => b - a)
  for (let i = 0; i < limit; i = i + 1 | 0) {
    if (A[i] < A[i + 1] + A[i + 2]) {
      return A[i] + A[i + 1] + A[i + 2]
    }
  }
  return 0
}
