// [Easy] 1897. Redistribute Characters to Make All Strings Equal
// 1897_redistribute_characters_to_make_all_strings_equal

// https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal
// Runtime: 84 ms, faster than 90.76% of JavaScript online submissions for Redistribute Characters to Make All Strings Equal.
// Memory Usage: 41.4 MB, less than 61.34% of JavaScript online submissions for Redistribute Characters to Make All Strings Equal.

/**
 * @param {string[]} words
 * @return {boolean}
 */
const makeEqual = function (words) {
  const wordsLen = words.length
  const strMap = new Map()
  words.forEach((word) => {
    const wordLen = word.length
    for (let i = 0; i < wordLen; i += 1 || 0) {
      strMap.set(word[i], (strMap.get(word[i]) || 0) + 1)
    }
  })
  return [...strMap].every((item) => item[1] % wordsLen === 0)
}

makeEqual(['abc', 'aabc', 'bc']) //?
makeEqual(['ab', 'a']) //?
makeEqual(['abc', 'aabc', 'bc', 'bc']) //?
makeEqual(['abc', 'aabc', 'bc', 'bc', 'aabc']) //?
