// [Medium] 436. Find Right Interval
// 436_find_right_interval

// https://leetcode.com/problems/find-right-interval
// Runtime: 134 ms, faster than 100.00% of TypeScript online submissions for Find Right Interval.
// Memory Usage: 51.7 MB, less than 50.00% of TypeScript online submissions for Find Right Interval.

function findRightInterval(intervals: number[][]): number[] {
  const startArr: number[] = intervals.map((item) => item[0])
  const startMax = Math.max(...startArr)
  const startMap = new Map<number, number>()
  startArr.forEach((item, index) => {
    startMap.set(item, index)
  })

  return intervals.map((item) => {
    const end = item[1]
    if (end > startMax) {
      return -1
    }
    let target = end
    while (target <= startMax) {
      if (startMap.has(target) === true) {
        return startMap.get(target)!
      }
      target += 1
    }
    return -1
  })
}
