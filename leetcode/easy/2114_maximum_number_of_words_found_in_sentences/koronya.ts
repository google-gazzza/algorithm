// [Easy] 2114. Maximum Number of Words Found in Sentences
// 2114_maximum_number_of_words_found_in_sentences

// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences
// Runtime: 124 ms, faster than 21.15% of TypeScript online submissions for Maximum Number of Words Found in Sentences.
// Memory Usage: 40.5 MB, less than 86.54% of TypeScript online submissions for Maximum Number of Words Found in Sentences.

function mostWordsFound(sentences: string[]): number {
  return sentences.reduce((acc, cur) => {
    const strLen = cur.split(' ').length
    return acc < strLen ? strLen : acc
  }, 0)
}
