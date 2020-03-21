// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
// Runtime: 60 ms, faster than 85.76% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Memory Usage: 36 MB, less than 100.00% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
const repeatedNTimes = A => {
  const ASet = new Set()
  for (const item of A) {
    if (ASet.has(item)) {
      return item
    }
    ASet.add(item)
  }
  return -1
}
