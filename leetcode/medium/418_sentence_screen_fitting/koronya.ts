// [Medium] 418. Sentence Screen Fitting
// 418_sentence_screen_fitting

// https://leetcode.com/problems/sentence-screen-fitting
// Runtime: 2852 ms, faster than 58.33% of TypeScript online submissions for Sentence Screen Fitting.
// Memory Usage: 40.8 MB, less than 83.33% of TypeScript online submissions for Sentence Screen Fitting.

function wordsTyping(sentence: string[], rows: number, cols: number): number {
  if (sentence.some((word) => word.length > cols) === true) {
    return 0
  }
  const sentenceLen: number = sentence.length
  const getNextWordIndex = (index: number): number => {
    return index === sentence.length - 1 ? 0 : index + 1
  }
  let count: number = 0
  let wordIndex: number = 0
  let rowIndex: number = 0
  let colIndex: number = 0

  while (rowIndex < rows) {
    const word: string = sentence[wordIndex]
    const wordLen: number = word.length
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
