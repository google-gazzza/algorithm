// https://leetcode.com/problems/unique-number-of-occurrences
// Runtime: 44 ms, faster than 99.74% of JavaScript online submissions for Unique Number of Occurrences.
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Unique Number of Occurrences.
const uniqueOccurrences = arr => {
  const numMap = new Map()
  const occurSet = new Set()
  arr.map(num => {
    numMap.set(num, (numMap.get(num) | 0) + 1)
  })
  
  for (const [key, value] of numMap) {
    if (occurSet.has(value)) {
      return false
    } else {
      occurSet.add(value)
    }
  }
  return true
}
