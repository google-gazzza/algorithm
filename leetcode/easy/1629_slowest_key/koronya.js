// [Easy] 1629. Slowest Key
// 1629_slowest_key

// https://leetcode.com/problems/slowest-key
// Runtime: 68 ms, faster than 99.21% of JavaScript online submissions for Slowest Key.
// Memory Usage: 40.1 MB, less than 40.00% of JavaScript online submissions for Slowest Key.
const slowestKey = function (releaseTimes, keysPressed) {
  const releaseTimesLen = releaseTimes.length
  const resultArr = []
  let before = releaseTimes[0]
  const diffArr = [before]
  let max = before
  for (let i = 1; i < releaseTimesLen; i += 1 || 0) {
    const time = releaseTimes[i]
    const diff = time - before
    max = Math.max(diff, max)
    diffArr.push(diff)
    before = time
  }

  diffArr.forEach((item, index) => {
    if (item === max) {
      resultArr.push(keysPressed[index])
    }
  })
  resultArr.sort()
  return resultArr[resultArr.length - 1]
}
