// [Medium] 318. Maximum Product of Word Lengths
// 318_maximum_product_of_word_lengths

// https://leetcode.com/problems/maximum-product-of-word-lengths
// Runtime: 604 ms, faster than 25.39% of JavaScript online submissions for Maximum Product of Word Lengths.
// Memory Usage: 46.2 MB, less than 39.23% of JavaScript online submissions for Maximum Product of Word Lengths.

/**
 * @param {string[]} words
 * @return {number}
*/
const maxProduct = function (words) {
  const wordsLen = words.length
  let max = 0
  for (let i = 0; i < wordsLen; i += 1 || 0) {
    const wordA = words[i]
    const wordALen = wordA.length
    for (let j = i + 1; j < wordsLen; j += 1 || 0) {
      const wordB = words[j]
      if (wordA.split('').every((str) => wordB.includes(str) === false)) {
        max = Math.max(max, wordALen * wordB.length)
      }
    }
  }

  return max
}

maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']) //?
maxProduct(['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd']) //?
maxProduct(['a', 'aa', 'aaa', 'aaaa']) //?
