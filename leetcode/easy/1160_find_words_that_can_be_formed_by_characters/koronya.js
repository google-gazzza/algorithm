// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters
// Runtime: 148 ms, faster than 75.48% of JavaScript online submissions for Find Words That Can Be Formed by Characters.
// Memory Usage: 44.8 MB, less than 100.00% of JavaScript online submissions for Find Words That Can Be Formed by Characters.

const countCharacters = (words, chars) => {
  const charsLen = chars.length
  const charsMap = new Map()

  for (let i = 0; i < charsLen; i += 1) {
    const char = chars[i]
    const charCount = charsMap.get(char) || 0
    charsMap.set(char, charCount + 1)
  }
  console.log('charsMap: ', charsMap)

  return words.reduce((accCount, word) => {
    const wordLen = word.length
    const duplicatedMap = new Map(charsMap)
    let isGoodWord = true
    for (let i = 0; i < wordLen; i += 1) {
      const text = word[i]
      const textCount = duplicatedMap.get(text) || 0
      if (textCount < 1) {
        isGoodWord = false
        break
      }
      duplicatedMap.set(text, textCount - 1)
    }
    if (isGoodWord === true) {
      console.log('word: ', word)
    }
    return isGoodWord === true
      ? accCount + wordLen
      : accCount
  }, 0)
}
