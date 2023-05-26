// [Easy] 819. Most Common Word
// 819_most_common_word

// https://leetcode.com/problems/most-common-word
// Runtime: 76 ms, faster than 92.94% of JavaScript online submissions for Most Common Word.
// Memory Usage: 38.1 MB, less than 89.96% of JavaScript online submissions for Most Common Word.
const PUNCTUATION_ARR = ["!", "?", "'", ",", ";", "."]
const SPLIT_ARR = [...PUNCTUATION_ARR, ' ']

const mostCommonWord = (paragraph, banned) => {
  const paragraphLen = paragraph.length
  const wordMap = new Map()
  let beforeWord = ''
  for (let i = 0; i < paragraphLen; i = i + 1 | 0) {
    const str = paragraph[i]
    if (SPLIT_ARR.includes(str)) {
      if (beforeWord !== '' && !banned.includes(beforeWord)) {
        wordMap.set(beforeWord, (wordMap.get(beforeWord) || 0) + 1)
      }
      beforeWord = ''
    } else {
      beforeWord += str.toLowerCase()
    }
  }
  if (beforeWord !== '' && !banned.includes(beforeWord)) {
    wordMap.set(beforeWord, (wordMap.get(beforeWord) || 0) + 1)
  }

  const firstWord = [...wordMap].sort((a, b) => b[1] - a[1])[0][0]
  return firstWord
}
