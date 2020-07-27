// [Easy] 392. Is Subsequence
// 392_is_subsequence

// https://leetcode.com/problems/is-subsequence
// Runtime: 56 ms, faster than 99.57% of JavaScript online submissions for Is Subsequence.
// Memory Usage: 37.2 MB, less than 11.27% of JavaScript online submissions for Is Subsequence.
const isSubsequence = (s, t) => {
  if (s === '') {
    return true
  }
  const sQueue = [...s]
  const tLen = t.length
  let target
  let last = 0
  let findFlag = false
  while (sQueue.length > 0) {
    target = sQueue.shift()
    findFlag = false
    for (let i = last; i < tLen; i = i + 1 | 0) {
      if (t[i] === target) {
        last = i + 1
        findFlag = true
        break
      }
    }
    if (findFlag === false) {
      break
    }
  }

  return findFlag
}
