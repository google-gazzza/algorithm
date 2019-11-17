// https://leetcode.com/problems/single-number
// Runtime: 52 ms, faster than 95.68% of JavaScript online submissions for Single Number.
// Memory Usage: 37.6 MB, less than 34.61% of JavaScript online submissions for Single Number.
const singleNumber = nums => {
  const numSet = new Set()
  nums.map(item => {
    if (numSet.has(item)) {
      numSet.delete(item)
    } else {
      numSet.add(item)
    }
  })

  return [...numSet][0]
}
