// [Hard] 1289. Minimum Falling Path Sum II
// 1289_minimum_falling_path_sum_ii

// https://leetcode.com/problems/minimum-falling-path-sum-ii
// Runtime: 100 ms, faster than 85.71% of JavaScript online submissions for Minimum Falling Path Sum II.
// Memory Usage: 43.1 MB, less than 71.43% of JavaScript online submissions for Minimum Falling Path Sum II.

/**
 * @param {number[][]} arr
 * @return {number}
 */
const getFirstSecond = (arr) => {
  const sortedArr = [...arr].sort((a, b) => a - b)
  return [sortedArr[0], sortedArr[1]]
}

const minFallingPathSum = function (arr) {
  const arrLen = arr.length
  for (let i = 1; i < arrLen; i += 1 || 0) {
    const prevRow = arr[i - 1]
    const [first, second] = getFirstSecond(prevRow)
    for (let j = 0; j < arrLen; j += 1 || 0) {
      arr[i][j] += prevRow[j] !== first ? first : second
    }
  }

  return Math.min(...arr[arrLen - 1])
}

// TLE...TT
const minFallingPathSum2 = function (arr) {
  const rowLen = arr.length
  let min = Number.MAX_SAFE_INTEGER
  const dfs = (sum, prevColIndex, prevRowIndex) => {
    if (prevRowIndex === rowLen - 1) {
      min = Math.min(sum, min)
    } else {
      const nextRowIndex = prevRowIndex + 1
      for (let i = 0; i < rowLen; i += 1 || 0) {
        if (i !== prevColIndex) {
          dfs(sum + arr[nextRowIndex][i], i, nextRowIndex)
        }
      }
    }
  }

  for (let i = 0; i < rowLen; i += 1 || 0) {
    dfs(arr[0][i], i, 0)
  }

  return min
}

minFallingPathSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]) //?

minFallingPathSum([[6, 3, 1]]) //?

minFallingPathSum([
  [-37, 51, -36, 34, -22],
  [82, 4, 30, 14, 38],
  [-68, -52, -92, 65, -85],
  [-49, -3, -77, 8, -19],
  [-60, -71, -21, -62, -73],
]) //?
minFallingPathSum2([
  [-37, 51, -36, 34, -22],
  [82, 4, 30, 14, 38],
  [-68, -52, -92, 65, -85],
  [-49, -3, -77, 8, -19],
  [-60, -71, -21, -62, -73],
]) //?

minFallingPathSum([
  [-2, -18, 31, -10, -71, 82, 47, 56, -14, 42],
  [-95, 3, 65, -7, 64, 75, -51, 97, -66, -28],
  [36, 3, -62, 38, 15, 51, -58, -90, -23, -63],
  [58, -26, -42, -66, 21, 99, -94, -95, -90, 89],
  [83, -66, -42, -45, 43, 85, 51, -86, 65, -39],
  [56, 9, 9, 95, -56, -77, -2, 20, 78, 17],
  [78, -13, -55, 55, -7, 43, -98, -89, 38, 90],
  [32, 44, -47, 81, -1, -55, -5, 16, -81, 17],
  [-87, 82, 2, 86, -88, -58, -91, -79, 44, -9],
  [-96, -14, -52, -8, 12, 38, 84, 77, -51, 52],
]) //?
