// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram
// Runtime: 132 ms, faster than 72.48% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
// Memory Usage: 41.5 MB, less than 100.00% of JavaScript online submissions for Minimum Number of Steps to Make Two Strings Anagram.
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = (s, t) => {
  const getMapValue = str => anagramMap.get(str) | 0
  const anagramMap = new Map()
  for (let str of s) {
    anagramMap.set(str, getMapValue(str) + 1)
  }
  for (let str of t) {
    anagramMap.set(str, getMapValue(str) - 1)
  }
  return [...anagramMap].reduce((acc, cur) => {
    const [_, value] = cur
    return value < 0
      ? acc - value
      : acc
  }, 0)
}
