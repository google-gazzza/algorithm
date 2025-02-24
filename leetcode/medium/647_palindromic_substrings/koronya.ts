// [Medium] 647. Palindromic Substrings
// 647_palindromic_substrings

// https://leetcode.com/problems/palindromic-substrings
// Runtime: 129 ms, faster than 57.45% of TypeScript online submissions for Palindromic Substrings.
// Memory Usage: 41.8 MB, less than 51.06% of TypeScript online submissions for Palindromic Substrings.

function countSubstrings(s: string): number {
  const sLen = s.length
  let result: number = 0
  const fnc = (left: number, right: number) => {
    while (left >= 0 && right <= sLen && s[left] === s[right]) {
      result += 1
      left -= 1
      right += 1
    }
  }
  for (let i: number = 0; i < sLen; i += 1) {
    fnc(i, i)
    fnc(i, i + 1)
  }

  return result
}
