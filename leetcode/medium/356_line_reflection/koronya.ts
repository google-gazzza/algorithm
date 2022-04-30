// [Medium] 356. Line Reflection
// 356_line_reflection

// https://leetcode.com/problems/line-reflection
// Runtime: 95 ms, faster than 100.00% of TypeScript online submissions for Line Reflection.
// Memory Usage: 48.8 MB, less than 100.00% of TypeScript online submissions for Line Reflection.

function isReflected(points: number[][]): boolean {
  const yMap = new Map<number, Set<number>>()
  points.forEach(([x, y]) => {
    if (yMap.has(y) === true) {
      yMap.get(y)!.add(x)
    } else {
      const set = new Set<number>()
      set.add(x)
      yMap.set(y, set)
    }
  })

  const yMapSize = yMap.size
  let prevAvg = 0
  const yMapArr = [...yMap]

  for (let i: number = 0; i < yMapSize; i += 1) {
    const [_, set] = yMapArr[i]
    const setArr = [...set]
    const setArrSize = set.size
    const avg = setArr.reduce((acc, cur) => acc + cur, 0) / set.size
    if (i !== 0 && avg !== prevAvg) {
      return false
    }
    prevAvg = avg

    for (let i: number = 0; i < setArrSize; i += 1) {
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

