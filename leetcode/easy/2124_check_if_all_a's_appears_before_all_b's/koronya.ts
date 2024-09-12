// [Easy] 2124. Check if All A's Appears Before All B's
// 2124_check_if_all_a's_appears_before_all_b's

// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs
// Runtime: 106 ms, faster than 63.83% of TypeScript online submissions for Check if All A's Appears Before All B's.
// Memory Usage: 40.3 MB, less than 51.06% of TypeScript online submissions for Check if All A's Appears Before All B's.

function checkString(s: string): boolean {
  const indexOfB: number = s.indexOf('b')
  return indexOfB === -1 ? true : s.substring(indexOfB).includes('a') === false
}
