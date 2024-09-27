// [Easy] 1422. Maximum Score After Splitting a String
// 1422_maximum_score_after_splitting_a_string

// https://leetcode.com/problems/maximum-score-after-splitting-a-string
// solution2보다 가독성은 떨어지지만 좀더 빠른 방법
// Runtime: 76 ms, faster than 89.92% of JavaScript online submissions for Maximum Score After Splitting a String.
// Memory Usage: 40.4 MB, less than 10.92% of JavaScript online submissions for Maximum Score After Splitting a String.
const maxScore = s => {
  const sArr = s.split('')
  const sLen = s.length
  let beforeLeftArr = []
  let beforeLeftScore = 0
  let beforeRightArr = sArr.slice(0)
  let beforeRightScore = beforeRightArr.reduce((acc, cur) => cur === '1' ? acc + 1 : acc, 0)
  let max = 0
  for (let i = 1; i < sLen; i = i + 1 | 0) {
    const [num] = beforeRightArr.splice(0, 1)
    beforeLeftArr.push(num)
    if (num === '0') {
      beforeLeftScore += 1
    } else if (num === '1') {
      beforeRightScore -= 1
    }
    max = Math.max(beforeLeftScore + beforeRightScore, max)
  }
  return max
}

// 최적화 하지 않은 첫번째 풀이
// Runtime: 104 ms, faster than 36.13% of JavaScript online submissions for Maximum Score After Splitting a String.
// Memory Usage: 44.4 MB, less than 10.92% of JavaScript online submissions for Maximum Score After Splitting a String.
const maxScore2 = s => {
  const sArr = s.split('')
  const sLen = s.length
  let max = 0
  for (let i = 1; i < sLen; i = i + 1 | 0) {
    const zeroScore = sArr.slice(0, i).reduce((acc, cur) => cur === '0' ? acc + 1 : acc, 0)
    const oneScore = sArr.slice(i).reduce((acc, cur) => cur === '1' ? acc + 1 : acc, 0)
    max = Math.max(zeroScore + oneScore, max)
  }
  return max
}
