// [Medium] 318. Maximum Product of Word Lengths
// 318_maximum_product_of_word_lengths

// https://leetcode.com/problems/maximum-product-of-word-lengths
// Runtime: 780 ms, faster than 50.00% of TypeScript online submissions for Maximum Product of Word Lengths.
// Memory Usage: 45.8 MB, less than 75.00% of TypeScript online submissions for Maximum Product of Word Lengths.

/**
 * @param {string[]} words
 * @return {number}
 */
const maxProduct = function (words) {
  const wordsLen: number = words.length
  let max: number = 0
  for (let i: number = 0; i < wordsLen; i += 1) {
    const wordA: string = words[i]
    const wordALen: number = wordA.length
    for (let j: number = i + 1; j < wordsLen; j += 1) {
      const wordB: string = words[j]
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
