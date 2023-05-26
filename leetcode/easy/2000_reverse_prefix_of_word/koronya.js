// [Easy] 2000. Reverse Prefix of Word
// 2000_reverse_prefix_of_word

// https://leetcode.com/problems/reverse-prefix-of-word
// Runtime: 76 ms, faster than 86.18% of JavaScript online submissions for Reverse Prefix of Word.
// Memory Usage: 38.8 MB, less than 35.53% of JavaScript online submissions for Reverse Prefix of Word.

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = function (word, ch) {
  const findIndex = word.indexOf(ch)
  return findIndex === -1
    ? word
    : word
        .substr(0, findIndex + 1)
        .split('')
        .reverse()
        .join('') + word.substr(findIndex + 1)
}

reversePrefix('abcdefd', 'd') //?
reversePrefix('xyxzxe', 'z') //?
reversePrefix('abcd', 'z') //?
