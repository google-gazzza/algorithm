// https://leetcode.com/problems/maximum-score-words-formed-by-letters
// Runtime: 88 ms, faster than 55.56% of JavaScript online submissions for Maximum Score Words Formed by Letters.
// Memory Usage: 42.3 MB, less than 100.00% of JavaScript online submissions for Maximum Score Words Formed by Letters.

const CHAR_CODE_AT_A = 'a'.charCodeAt()
const getScoreOfStr = (str, score) => score[str.charCodeAt() - CHAR_CODE_AT_A]
const getWordAvailableInfo = (word, map) => {
  let availableFlag = true
  let cloneMap = new Map(map)
  const wordLen = word.length
  for (let i = 0; i < wordLen; i = i + 1 | 0) {
    const str = word[i]
    if (!cloneMap.get(str)) {
      availableFlag = false
      break
    } else {
      cloneMap.set(str, cloneMap.get(str) - 1)
    }
  }
  return {availableFlag, cloneMap}
}
const getWordsAvailableInfo = (words, map) => {
  let cloneMap = new Map(map)
  return words.every(word => {
    const checkInfo = getWordAvailableInfo(word, cloneMap)
    cloneMap = checkInfo.cloneMap
    return checkInfo.availableFlag
  })
}

const maxScoreWords = (words, letters, score) => {
  const freqMap = new Map()
  letters.map(str => freqMap.set(str, (freqMap.get(str) | 0) + 1))
  const availableWords = words.filter(word => getWordAvailableInfo(word, freqMap).availableFlag)
  const availableWordsLen = availableWords.length
  const candidateArr = []
  const backtracking = (arr, start) => {
    if (getWordsAvailableInfo(arr, freqMap) !== true) {
      return
    }
    if (arr.length > 0) {
      candidateArr.push([...arr])
    }
    for (let i = start; i < availableWordsLen; i = i + 1 | 0) {
      arr.push(availableWords[i])
      backtracking(arr, i + 1)
      arr.pop()
    }
  }
  backtracking([], 0)

  return candidateArr.reduce((beforeMax, words) => {
    const wordsSum = words.reduce((beforeSum, word) => {
      let wordSum = 0
      const wordLen = word.length
      for (let i = 0; i < wordLen; i = i + 1 | 0) {
        wordSum += getScoreOfStr(word[i], score)
      }
      return beforeSum + wordSum
    }, 0)
    return Math.max(beforeMax, wordsSum)
  }, 0)
}
