// https://leetcode.com/problems/unique-paths
// Runtime: 52 ms, faster than 84.86% of JavaScript online submissions for Unique Paths.
// Memory Usage: 35.5 MB, less than 9.09% of JavaScript online submissions for Unique Paths.
const uniquePaths = (m, n) => {
  const resultMap = new Map()
  resultMap.set('0,0', 1)

  const getPaths = (row, col) => {
    if (row < 0 || col < 0) {
      return 0
    }

    const key = `${row},${col}`
    if (resultMap.has(key)) {
      return resultMap.get(key)
    }

    const result = getPaths(row - 1, col) + getPaths(row, col - 1)
    resultMap.set(key, result)

    return result
  }

  return getPaths(m - 1, n - 1)
}
