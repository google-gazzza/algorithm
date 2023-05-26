// [Easy] 884. Uncommon Words from Two Sentences
// 884_uncommon_words_from_two_sentences

// https://leetcode.com/problems/uncommon-words-from-two-sentences/
// Runtime: 64 ms, faster than 96.71% of JavaScript online submissions for Uncommon Words from Two Sentences.
// Memory Usage: 37 MB, less than 31.91% of JavaScript online submissions for Uncommon Words from Two Sentences.
const uncommonFromSentences = (A, B) => {
  const wordMap = new Map()
  const uncommonArr = []
  const mappedFunction = word => {
    if (!wordMap.has(word)) {
      wordMap.set(word, 1)
      uncommonArr.push(word)
    } else {
      if (wordMap.get(word) === 1) {
        wordMap.set(word, 2)
        const removeIndex = uncommonArr.indexOf(word)
        uncommonArr.splice(removeIndex, 1)
      }
    }
  }
  A.split(' ').forEach(mappedFunction)
  B.split (' ').forEach(mappedFunction)

  return uncommonArr
}
