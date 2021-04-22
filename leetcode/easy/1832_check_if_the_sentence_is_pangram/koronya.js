// [Easy] 1832. Check if the Sentence Is Pangram
// 1832_check_if_the_sentence_is_pangram

// https://leetcode.com/problems/check-if-the-sentence-is-pangram
// Runtime: 68 ms, faster than 99.32% of JavaScript online submissions for Check if the Sentence Is Pangram.
// Memory Usage: 38.9 MB, less than 63.24% of JavaScript online submissions for Check if the Sentence Is Pangram.

const KEYCODE_OF_LOWER_A = 'a'.charCodeAt(0) //?
const KEYCODE_OF_LOWER_Z = 'z'.charCodeAt(0) //?

/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function (sentence) {
  const sentenceLen = sentence.length
  const engSet = new Set()
  for (let i = KEYCODE_OF_LOWER_A; i <= KEYCODE_OF_LOWER_Z; i += 1 || 0) {
    engSet.add(i)
  }
  for (let i = 0; i < sentenceLen; i += 1 || 0) {
    const strKeycode = sentence[i].charCodeAt(0)
    if (engSet.has(strKeycode)) {
      engSet.delete(strKeycode)
    }
  }

  return engSet.size === 0
}

checkIfPangram('abc') //?
checkIfPangram('thequickbrownfoxjumpsoverthelazydog') //?
checkIfPangram('leetcode') //?
