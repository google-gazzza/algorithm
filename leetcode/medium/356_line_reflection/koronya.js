// [Medium] 356. Line Reflection
// 356_line_reflection

// https://leetcode.com/problems/line-reflection
// Runtime: 94 ms, faster than 80.00% of JavaScript online submissions for Line Reflection.
// Memory Usage: 48.3 MB, less than 90.00% of JavaScript online submissions for Line Reflection.

/**
 * @param {number[][]} points
 * @return {boolean}
 */
const isReflected = function (points) {
  const yMap = new Map()
  points.forEach(([x, y]) => {
    if (yMap.has(y) === true) {
      yMap.get(y).add(x)
    } else {
      const set = new Set()
      set.add(x)
      yMap.set(y, set)
    }
  })

  const yMapSize = yMap.size
  let prevAvg = 0
  const yMapArr = [...yMap]

  for (let i = 0; i < yMapSize; i += 1 || 0) {
    const [_, set] = yMapArr[i]
    const setArr = [...set]
    const setArrSize = set.size
    const avg = setArr.reduce((acc, cur) => acc + cur, 0) / set.size
    if (i !== 0 && avg !== prevAvg) {
      return false
    }
    prevAvg = avg

    for (let i = 0; i < setArrSize; i += 1 || 0) {
      const num = setArr[i]
      const diff = Math.abs(avg - num)
      const target = num >= avg ? num - 2 * diff : num + 2 * diff
      if (set.has(target) === false) {
        return false
      }
    }
  }

  return true
}

// isReflected([
//   [1, 1],
//   [-1, 1],
// ])

// isReflected([
//   [1, 1],
//   [-1, -1],
// ])

// to be true
// isReflected([
//   [1, 1],
//   [-1, 1],
//   [2, 0],
//   [-2, 0],
// ])

// // to be true
// isReflected([
//   [1, 1],
//   [-1, 1],
//   [2, 0],
//   [-2, 0],
//   [2, 0],
//   [2, 1],
//   [-2, 1],
// ])

// // to be false
// isReflected([
//   [3, 1],
//   [-1, 1],
//   [2, 0],
//   [-2, 0],
// ])

// // to be false
// isReflected([
//   [3, 1],
//   [-1, 1],
//   [2, 0],
//   [-2, 0],
// ])

// // to be true
// isReflected([
//   [3, 1],
//   [-1, 1],
//   [2, 1],
//   [-2, 1],
// ])

// // to be true
// isReflected([
//   [3, 1],
//   [-1, 1],
// ])

// // to be true
// isReflected([
//   [3, 1],
//   [-1, 1],
//   [1, 1],
// ])

// // to be true
// isReflected([
//   [3, 1],
//   [-1, 1],
//   [1, 1],
//   [10, 1],
//   [-8, 1],
// ])

// // to be false
// isReflected([
//   [3, 1],
//   [-1, 1],
//   [1, 1],
//   [10, 1],
//   [-9, 1],
// ])
