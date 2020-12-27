// [Easy] 748. Shortest Completing Word
// 748_shortest_completing_word

// Runtime: 108 ms, faster than 100.00% of TypeScript online submissions for Shortest Completing Word.
// Memory Usage: 42.4 MB, less than 100.00% of TypeScript online submissions for Shortest Completing Word.
const CHAR_CODE_OF_LOWER_A: number = 'a'.charCodeAt(0)//?
const CHAR_CODE_OF_LOWER_Z: number = 'z'.charCodeAt(0)//?
const isBetween = (start: number, end: number, num: number): boolean => start <= num && num <= end
const isAlphabetic = (str: string): boolean => {
  const charCodeOfStr = str.toLowerCase().charCodeAt(0)
  return isBetween(CHAR_CODE_OF_LOWER_A, CHAR_CODE_OF_LOWER_Z, charCodeOfStr)
}
const toLowercaseMap = str => str.toLowerCase()

const isCompletingWord = (wordsMap: Map<string, number>, word: string) => {
  for (const info of wordsMap) {
    const [key, value] = info
    let index: number = word.indexOf(key)
    let count: number = value - 1
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

function shortestCompletingWord (licensePlate: string, words: string[]): string {
  const wordsLen: number = words.length
  const wordsMap = new Map<string, number>()
  licensePlate.split('').map(toLowercaseMap).forEach(str => {
    if (isAlphabetic(str)) {
      wordsMap.set(str, (wordsMap.get(str) || 0) + 1)
    }
  })
  words.sort((a, b) => a.length - b.length)
  for (let i: number = 0; i < wordsLen; i += 1 || 0) {
    const word: string = words[i]
    if (isCompletingWord(wordsMap, word) === true) {
      return word
    }
  }
  // 아래 일은 발생하지 않음을 문제에서 guarantee!
  return ''
}
