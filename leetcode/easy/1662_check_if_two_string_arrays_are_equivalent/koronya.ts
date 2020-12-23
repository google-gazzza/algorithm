// [Easy] 1662. Check If Two String Arrays are Equivalent 
// 1662_check_if_two_string_arrays_are_equivalent 

// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent
// Runtime: 76 ms, faster than 93.44% of TypeScript online submissions for Check If Two String Arrays are Equivalent.
// Memory Usage: 40.2 MB, less than 62.30% of TypeScript online submissions for Check If Two String Arrays are Equivalent.
const connectStr = (acc: string, cur: string): string => acc + cur
function arrayStringsAreEqual (word1: string[], word2: string[]): boolean {
  return word1.reduce(connectStr, '') === word2.reduce(connectStr, '')
}
