// [Medium] 436. Find Right Interval
// 436_find_right_interval

// https://leetcode.com/problems/find-right-interval
// Runtime: 104 ms, faster than 97.83% of JavaScript online submissions for Find Right Interval.
// Memory Usage: 51.2 MB, less than 50.00% of JavaScript online submissions for Find Right Interval.

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
const findRightInterval = function (intervals) {
  const startArr = intervals.map((item) => item[0])
  const startMax = Math.max(...startArr)
  const startMap = new Map()
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
        return startMap.get(target)
      }
      target += 1
    }
    return -1
  })
}

findRightInterval([[1, 2]])
findRightInterval([
  [3, 4],
  [2, 3],
  [1, 2],
])
findRightInterval([
  [1, 4],
  [2, 3],
  [3, 4],
])
