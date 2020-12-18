// [Easy] 1684. Count the Number of Consistent Strings
// 1684_count_the_number_of_consistent_strings

// https://leetcode.com/problems/count-the-number-of-consistent-strings
// Runtime: 108 ms, faster than 93.73% of JavaScript online submissions for Count the Number of Consistent Strings.
// Memory Usage: 52.2 MB, less than 14.02% of JavaScript online submissions for Count the Number of Consistent Strings.
const countConsistentStrings = function (allowed, words) {
  const allowedSet = new Set()
  for (const str of allowed) {
    allowedSet.add(str)
  }
  return words.reduce((acc, cur) => {
    if ([...cur].every(str => allowedSet.has(str))) {
      return acc + 1
    }
    return acc
  }, 0)
}
