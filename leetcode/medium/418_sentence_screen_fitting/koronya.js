// [Medium] 418. Sentence Screen Fitting
// 418_sentence_screen_fitting

// https://leetcode.com/problems/sentence-screen-fitting
// Runtime: 2940 ms, faster than 31.18% of JavaScript online submissions for Sentence Screen Fitting.
// Memory Usage: 38.9 MB, less than 62.35% of JavaScript online submissions for Sentence Screen Fitting.

/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
const wordsTyping = function (sentence, rows, cols) {
  if (sentence.some((word) => word.length > cols) === true) {
    return 0
  }
  const sentenceLen = sentence.length
  const getNextWordIndex = (index) => {
    return index === sentence.length - 1 ? 0 : index + 1
  }
  let count = 0
  let wordIndex = 0
  let rowIndex = 0
  let colIndex = 0

  while (rowIndex < rows) {
    const word = sentence[wordIndex]
    const wordLen = word.length
    if (wordLen <= cols - colIndex) {
      colIndex += wordLen
      if (colIndex < cols) {
        colIndex += 1
      }
    } else {
      if (rowIndex === rows - 1) {
        break
      }
      rowIndex += 1
      colIndex = wordLen === cols - 1 ? wordLen : wordLen + 1
    }
    if (wordIndex === sentenceLen - 1) {
      count += 1
    }
    wordIndex = getNextWordIndex(wordIndex)
  }
  return count
}

wordsTyping(['hello', 'world'], 2, 8) //?
wordsTyping(['a', 'bcd', 'e'], 3, 6) //?
wordsTyping(['i', 'had', 'apple', 'pie'], 4, 5) //?
wordsTyping(['hello'], 10000, 1) //?
