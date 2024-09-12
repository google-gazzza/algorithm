// [Easy] 2278. Percentage of Letter in String
// 2278_percentage_of_letter_in_string

// https://leetcode.com/problems/percentage-of-letter-in-string
// Runtime: 91 ms, faster than 60.00% of TypeScript online submissions for Percentage of Letter in String.
// Memory Usage: 43.1 MB, less than 66.67% of TypeScript online submissions for Percentage of Letter in String.

function percentageLetter(s: string, letter: string): number {
  const sLen = s.length
  let count = 0
  for (let i: number = 0; i < sLen; i += 1) {
    if (s[i] === letter) {
      count += 1
    }
  }

  return Math.floor((count / sLen) * 100)
}
