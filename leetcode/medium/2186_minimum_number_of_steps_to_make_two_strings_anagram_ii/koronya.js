// [Medium] 2186. Minimum Number of Steps to Make Two Strings Anagram II
// 2186_minimum_number_of_steps_to_make_two_strings_anagram_ii

// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii
// Runtime: 252 ms, faster than 64.69% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram II.
// Memory Usage: 56.5 MB, less than 25.88% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram II.

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = function (s, t) {
  const sMap = new Map()
  s.split('').forEach((str) => {
    sMap.set(str, (sMap.get(str) || 0) + 1)
  })
  t.split('').forEach((str) => {
    sMap.set(str, (sMap.get(str) || 0) - 1)
  })

  return [...sMap].filter(([_, count]) => count !== 0).reduce((acc, [_, count]) => (count > 0 ? acc + count : acc - count), 0)
}

minSteps('leetcode', 'coats')
