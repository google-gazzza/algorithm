// https://leetcode.com/problems/peak-index-in-a-mountain-array
// Runtime: 56 ms, faster than 69.43% of JavaScript online submissions for Peak Index in a Mountain Array.
// Memory Usage: 35.2 MB, less than 40.00% of JavaScript online submissions for Peak Index in a Mountain Array.
const peakIndexInMountainArray = A => {
  const ALen = A.length
  let before = Number.MIN_SAFE_INTEGER
  let isAscend = true
  
  for (let i = 0; i < ALen; i += 1) {
    const num = A[i]
    if (isAscend === true) {
      if (num > before) {
        before = num
      } else {
        return i - 1
      }
    }
  }
  return -1
}
