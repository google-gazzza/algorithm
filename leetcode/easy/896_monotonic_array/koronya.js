// https://leetcode.com/problems/monotonic-array
// Runtime: 72 ms, faster than 80.00% of JavaScript online submissions for Monotonic Array.
// Memory Usage: 40.1 MB, less than 100.00% of JavaScript online submissions for Monotonic Array.
const isMonotonic = A => {
  const ALen = A.length
  let isAsc = false
  let isDesc = false
  let isInit = true

  for (let i = 1; i < ALen; i += 1) {
    if (A[i] > A[i - 1]) {
      if (isInit === true) {
        isAsc = true
        isInit = false
      } else if (isAsc === false) {
        return false
      }
    } else if (A[i] < A[i - 1]) {
      if (isInit === true) {
        isDesc = true
        isInit = false
      } else if (isDesc === false) {
        return false
      }
    }
  }
  return true
}
