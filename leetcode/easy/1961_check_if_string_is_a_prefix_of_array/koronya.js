// [Easy] 1961. Check If String Is a Prefix of Array
// 1961_check_if_string_is_a_prefix_of_array

// https://leetcode.com/problems/check-if-string-is-a-prefix-of-array
// Runtime: 80 ms, faster than 68.23% of JavaScript online submissions for Check If String Is a Prefix of Array.
// Memory Usage: 40.1 MB, less than 73.18% of JavaScript online submissions for Check If String Is a Prefix of Array.

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const isPrefixString = function (s, words) {
  let lastIndex = -1
  const wordsLen = words.length
  for (let i = 0; i < wordsLen; i += 1 || 0) {
    const word = words[i]
    const wordLen = word.length
    if (s.substr(lastIndex + 1, wordLen) !== word) {
      break
    }
    lastIndex += wordLen
  }

  return s.length - 1 === lastIndex
}

isPrefixString('iloveleetcode', ['i', 'love', 'leetcode', 'apples']) //?
isPrefixString('iloveleetcode', ['apples', 'i', 'love', 'leetcode']) //?
