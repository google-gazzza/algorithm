// [Easy] 2068. Check Whether Two Strings are Almost Equivalent
// 2068_check_whether_two_strings_are_almost_equivalent

// https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent
// Runtime: 84 ms, faster than 75.00% of TypeScript online submissions for Check Whether Two Strings are Almost Equivalent.
// Memory Usage: 40.9 MB, less than 100.00% of TypeScript online submissions for Check Whether Two Strings are Almost Equivalent.

const THRESHOLD = 3

function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const word1Map = new Map<string, number>()
  const word2Map = new Map<string, number>()
  word1.split('').forEach((word) => word1Map.set(word, (word1Map.get(word) || 0) + 1))
  word2.split('').forEach((word) => word2Map.set(word, (word2Map.get(word) || 0) + 1))

  for (const word1 of word1Map) {
    const [key, value] = word1
    if (word2Map.has(key) === false) {
      word2Map.set(key, value)
    } else {
      const diff = Math.abs(word2Map.get(key)! - value)
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
