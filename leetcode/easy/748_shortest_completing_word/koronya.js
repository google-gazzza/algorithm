// [Easy] 748. Shortest Completing Word
// 748_shortest_completing_word

// Runtime: 88 ms, faster than 95.59% of JavaScript online submissions for Shortest Completing Word.
// Memory Usage: 41.9 MB, less than 73.53% of JavaScript online submissions for Shortest Completing Word.
const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt()//?
const CHAR_CODE_OF_LOWER_Z = 'z'.charCodeAt()//?
const isBetween = (start, end, num) => start <= num && num <= end
const isAlphabetic = str => {
  const charCodeOfStr = str.toLowerCase().charCodeAt()
  return isBetween(CHAR_CODE_OF_LOWER_A, CHAR_CODE_OF_LOWER_Z, charCodeOfStr)
}
const toLowercaseMap = str => str.toLowerCase()

const isCompletingWord = (wordsMap, word) => {
  for (const info of wordsMap) {
    const [key, value] = info
    let index = word.indexOf(key)
    let count = value - 1
    while (index !== -1 && count > 0) {
      index = word.indexOf(key, index + 1)
      count -= 1
    }
    if (index === -1) {
      return false
    }
  }
  return true
}

const shortestCompletingWord = (licensePlate, words) => {
  const wordsLen = words.length
  const wordsMap = new Map()
  licensePlate.split('').map(toLowercaseMap).forEach(str => {
    if (isAlphabetic(str)) {
      wordsMap.set(str, (wordsMap.get(str) || 0) + 1)
    }
  })
  words.sort((a, b) => a.length - b.length)
  for (let i = 0; i < wordsLen; i += 1 || 0) {
    const word = words[i]
    if (isCompletingWord(wordsMap, word) === true) {
      return word
    }
  }
}
