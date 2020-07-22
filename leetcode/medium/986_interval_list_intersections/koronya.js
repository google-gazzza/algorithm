// [Medium] 986. Interval List Intersections
// 986_interval_list_intersections

// https://leetcode.com/problems/interval-list-intersections
// Runtime: 104 ms, faster than 50.12% of JavaScript online submissions for Interval List Intersections.
// Memory Usage: 43.6 MB, less than 28.24% of JavaScript online submissions for Interval List Intersections.
const intervalIntersection = (A, B) => {
  const BLen = B.length
  const resultArr = []
  let lastIndex = 0
  A.forEach(itemA => {
    const [startA, endA] = itemA
    for (let i = lastIndex; i < BLen; i = i + 1 | 0) {
      const [startB, endB] = B[i]
      if (endA < startB) {
        break
      }
      if (endB < startA) {
        continue
      }
      const start = startA <= startB ? startB : startA
      const end = endA <= endB ? endA : endB
      resultArr.push([start, end])
      lastIndex = i
    }
  })

  return resultArr
}
