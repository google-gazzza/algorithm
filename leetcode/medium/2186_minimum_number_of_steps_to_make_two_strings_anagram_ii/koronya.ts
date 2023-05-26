// [Medium] 2186. Minimum Number of Steps to Make Two Strings Anagram II
// 2186_minimum_number_of_steps_to_make_two_strings_anagram_ii

// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii
// Runtime: 291 ms, faster than 50.00% of TypeScript online submissions for Minimum Number of Steps to Make Two Strings Anagram II.
// Memory Usage: 57 MB, less than 10.00% of TypeScript online submissions for Minimum Number of Steps to Make Two Strings Anagram II.

function minSteps(s: string, t: string): number {
  const sMap = new Map<string, number>()
  s.split('').forEach((str) => {
    sMap.set(str, (sMap.get(str) || 0) + 1)
  })
  t.split('').forEach((str) => {
    sMap.set(str, (sMap.get(str) || 0) - 1)
  })

  return [...sMap].filter(([_, count]) => count !== 0).reduce((acc, [_, count]) => (count > 0 ? acc + count : acc - count), 0)
}
