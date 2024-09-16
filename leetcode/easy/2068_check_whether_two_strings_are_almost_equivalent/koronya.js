// [Easy] 2068. Check Whether Two Strings are Almost Equivalent
// 2068_check_whether_two_strings_are_almost_equivalent

// https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent
// Runtime: 72 ms, faster than 95.96% of JavaScript online submissions for Check Whether Two Strings are Almost Equivalent.
// Memory Usage: 40.3 MB, less than 82.83% of JavaScript online submissions for Check Whether Two Strings are Almost Equivalent.

const THRESHOLD = 3

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const checkAlmostEquivalent = function (word1, word2) {
  const word1Map = new Map()
  const word2Map = new Map()
  word1.split('').forEach((word) => word1Map.set(word, (word1Map.get(word) || 0) + 1))
  word2.split('').forEach((word) => word2Map.set(word, (word2Map.get(word) || 0) + 1))

  for (const word1 of word1Map) {
    const [key, value] = word1
    if (word2Map.has(key) === false) {
      word2Map.set(key, value)
    } else {
      const diff = Math.abs(word2Map.get(key) - value)
      if (diff > THRESHOLD) {
        return false
      }
      word2Map.set(key, diff)
    }
  }
  for (const word2 of word2Map) {
    const [key, value] = word2
    if (value > THRESHOLD) {
      return false
    }
  }
  return true
}

checkAlmostEquivalent('aaaa', 'bccb') //?
checkAlmostEquivalent('abcdeef', 'abaaacc') //?
checkAlmostEquivalent('cccddabba', 'babababab') //?
checkAlmostEquivalent('aaaa', 'aaaa') //?
