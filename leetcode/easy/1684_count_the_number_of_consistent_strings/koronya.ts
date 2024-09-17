// [Easy] 1684. Count the Number of Consistent Strings 
// 1684_count_the_number_of_consistent_strings 

// https://leetcode.com/problems/count-the-number-of-consistent-strings
// Runtime: 120 ms, faster than 72.73% of TypeScript online submissions for Count the Number of Consistent Strings.
// Memory Usage: 52.4 MB, less than 27.27% of TypeScript online submissions for Count the Number of Consistent Strings.
function countConsistentStrings (allowed: string, words: string[]): number {
  const allowedSet = new Set<String>()
  for (const str of allowed) {
    allowedSet.add(str)
  }
  return words.reduce((acc: number, cur: string): number => {
    if ([...cur].every(str => allowedSet.has(str))) {
      return acc + 1
    }
    return acc
  }, 0)
}
