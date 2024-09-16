// [Easy] 2114. Maximum Number of Words Found in Sentences
// 2114_maximum_number_of_words_found_in_sentences

// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences
// Runtime: 76 ms, faster than 83.54% of JavaScript online submissions for Maximum Number of Words Found in Sentences.
// Memory Usage: 40.8 MB, less than 24.87% of JavaScript online submissions for Maximum Number of Words Found in Sentences.

/**
 * @param {string[]} sentences
 * @return {number}
 */
const mostWordsFound = function (sentences) {
  return sentences.reduce((acc, cur) => {
    const strLen = cur.split(' ').length
    return acc < strLen ? strLen : acc
  }, 0)
}

mostWordsFound(['alice and bob love leetcode', 'i think so too', 'this is great thanks very much']) //?
mostWordsFound(['please wait', 'continue to fight', 'continue to win']) //?
