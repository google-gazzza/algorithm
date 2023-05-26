// [Medium] 1208. Get Equal Substrings Within Budget
// 1208_get_equal_substrings_within_budget

//  https://leetcode.com/problems/get-equal-substrings-within-budget
// Runtime: 140 ms, faster than 50.00% of TypeScript online submissions for Get Equal Substrings Within Budget.
// Memory Usage: 43.1 MB, less than 50.00% of TypeScript online submissions for Get Equal Substrings Within Budget.

const getDiffOfTwoString = (a: string, b: string): number => Math.abs(a.charCodeAt(0) - b.charCodeAt(0))

function equalSubstring(s: string, t: string, maxCost: number): number {
  const diffArr: number[] = s.split('').map((item, index) => getDiffOfTwoString(item, t[index]))
  const sLen: number = s.length
  let maxLen: number = 0

  let windowSum: number = 0
  let start: number = 0
  for (let end: number = 0; end < sLen; end += 1) {
    windowSum += diffArr[end]
    while (windowSum > maxCost) {
      windowSum -= diffArr[start]
      start += 1
    }
    maxLen = Math.max(maxLen, end - start + 1)
  }

  return maxLen
}
