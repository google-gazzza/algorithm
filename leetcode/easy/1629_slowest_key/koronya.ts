// [Easy] 1629. Slowest Key
// 1629_slowest_key

// https://leetcode.com/problems/slowest-key
// Runtime: 92 ms, faster than 60.00% of TypeScript online submissions for Slowest Key.
// Memory Usage: 40.9 MB, less than 86.67% of TypeScript online submissions for Slowest Key.
function slowestKey (releaseTimes: number[], keysPressed: string): string {
  const releaseTimesLen: number = releaseTimes.length
  const resultArr: string[] = []
  let before: number = releaseTimes[0]
  const diffArr: number[] = [before]
  let max: number = before
  for (let i: number = 1; i < releaseTimesLen; i += 1 || 0) {
    const time: number = releaseTimes[i]
    const diff: number = time - before
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
