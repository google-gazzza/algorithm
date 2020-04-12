// https://leetcode.com/problems/remove-covered-intervals

// 모든 배열 비교 하지 않고, 일단 정렬 후, 비교 대상보다 커지는 순간 그만 비교하게 하기
// Runtime: 60 ms, faster than 91.25% of JavaScript online submissions for Remove Covered Intervals.
// Memory Usage: 37.8 MB, less than 100.00% of JavaScript online submissions for Remove Covered Intervals.
const removeCoveredIntervals = intervals => {
  const intervalsLen = intervals.length
  let count = 0
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < intervalsLen; i = i + 1 | 0) {
    const [low, high] = intervals[i]
    let isCovered = false
    for (let j = 0; j < intervalsLen; j = j + 1 | 0) {
      if (i !== j) {
        const [low2, high2] = intervals[j]
        if (low < low2) {
          break
        }
        if (high <= high2 ) {
          isCovered = true
          break
        }
      }
    }
    if (isCovered === false) {
      count += 1
    }
  }
  return count
}

// 그냥 모든 배열을 비교한 것
// Runtime: 56 ms, faster than 96.25% of JavaScript online submissions for Remove Covered Intervals.
// Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions for Remove Covered Intervals.
const removeCoveredIntervals2 = intervals => {
  const intervalsLen = intervals.length
  let count = 0
  for (let i = 0; i < intervalsLen; i = i + 1 | 0) {
    const [low, high] = intervals[i]
    let isCovered = false
    for (let j = 0; j < intervalsLen; j = j + 1 | 0) {
      if (i !== j) {
        const [low2, high2] = intervals[j]
        if (low2 <= low && high <= high2 ) {
          isCovered = true
          break
        }
      }
    }
    if (isCovered === false) {
      count += 1
    }
  }
  return count
}
