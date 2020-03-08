// https://leetcode.com/problems/contains-duplicate
// Runtime: 64 ms, faster than 84.60% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 40.5 MB, less than 64.71% of JavaScript online submissions for Contains Duplicate.
const containsDuplicate = nums => {
  const numSet = new Set()
  for (const num of nums) {
    if (numSet.has(num)) {
      return true
    }
    numSet.add(num)
  }
  return false
}
