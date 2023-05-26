// [Hard] 1499. Max Value of Equation
// 1499_max_value_of_equation

// https://leetcode.com/problems/max-value-of-equation
// Runtime: 258 ms, faster than 100.00% of TypeScript online submissions for Max Value of Equation.
// Memory Usage: 103.6 MB, less than 100.00% of TypeScript online submissions for Max Value of Equation.

function findMaxValueOfEquation(points: number[][], k: number): number {
  let max = Number.MIN_SAFE_INTEGER
  const arr: number[][] = []
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
