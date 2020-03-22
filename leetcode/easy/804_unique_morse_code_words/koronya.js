// https://leetcode.com/problems/unique-morse-code-words
// Runtime: 56 ms, faster than 87.90% of JavaScript online submissions for Unique Morse Code Words.
// Memory Usage: 35.9 MB, less than 33.33% of JavaScript online submissions for Unique Morse Code Words.

const morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
const CHAR_CODE_OF_A = 'a'.charCodeAt()
const morseMapper = str => morseArr[str.charCodeAt() - CHAR_CODE_OF_A]

const uniqueMorseRepresentations = words => {
  const uniqueSet = new Set()
  words.map(word => {
    const morseWord = [...word].reduce((acc, cur) => acc + morseMapper(cur), '')
    if (!uniqueSet.has(morseWord)) {
      uniqueSet.add(morseWord)
    }
  })

  return uniqueSet.size
}
