// [Hard] 1499. Max Value of Equation
// 1499_max_value_of_equation

// https://leetcode.com/problems/max-value-of-equation
// Runtime: 252 ms, faster than 88.89% of JavaScript online submissions for Max Value of Equation.
// Memory Usage: 103 MB, less than 33.33% of JavaScript online submissions for Max Value of Equation.

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
const findMaxValueOfEquation = function (points, k) {
  let max = Number.MIN_SAFE_INTEGER
  const arr = []
  points.forEach((point) => {
    const [x, y] = point
    const diff = y - x
    while (arr.length && x - arr[0][1] > k) {
      arr.shift()
    }
    if (arr.length) {
      max = Math.max(max, arr[0][0] + y + x)
    }
    while (arr.length && diff > arr[arr.length - 1][0]) {
      arr.pop()
    }
    arr.push([diff, x])
  })

  return max
}

const findMaxValueOfEquation2 = function (points, k) {
  const pointsLen = points.length
  let max = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < pointsLen; i += 1 || 0) {
    const [leftX, leftY] = points[i]
    for (let j = i + 1; j < pointsLen; j += 1 || 0) {
      const [rightX, rightY] = points[j]
      const diff = rightX - leftX
      if (diff <= k) {
        max = Math.max(max, diff + leftY + rightY)
      }
    }
  }

  return max
}

findMaxValueOfEquation(
  [
    [1, 3],
    [2, 0],
    [5, 10],
    [6, -10],
  ],
  1,
)

// findMaxValueOfEquation(
//   [
//     [0, 0],
//     [3, 0],
//     [9, 2],
//   ],
//   3,
// )
