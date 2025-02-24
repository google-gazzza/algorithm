// [Medium] 1813. Sentence Similarity III
// 1813_sentence_similarity_iii

// https://leetcode.com/problems/sentence-similarity-iii
// Runtime: 58 ms, faster than 100.00% of TypeScript online submissions for Sentence Similarity III.
// Memory Usage: 43.1 MB, less than 100.00% of TypeScript online submissions for Sentence Similarity III.

function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  let long = sentence1
  let short = sentence2
  if (sentence1.length < sentence2.length) {
    long = sentence2
    short = sentence1
  }
  const longArr = long.split(' ')
  const longArrLen = longArr.length
  const shortArr = short.split(' ')
  const shortArrLen = shortArr.length
  let i = 0
  while (i < shortArrLen && shortArr[i] === longArr[i]) {
    i += 1
  }
  while (i < shortArrLen && shortArr[i] === longArr[longArrLen - shortArrLen + i]) {
    i += 1
  }

  return i === shortArrLen
}
