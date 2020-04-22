// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping
// Runtime: 52 ms, faster than 78.87% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
// Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
const mapper = num => {
  const CHAR_CODE_OF_a = 'a'.charCodeAt()
  return String.fromCharCode(num - 1 + CHAR_CODE_OF_a)
}

const freqAlphabets = s => {
  const candidateArr = []
  const sLen = s.length
  let beforeStr = ''
  let waitCount = 0
  for (let i = sLen - 1; i >= 0; i = i - 1 | 0) {
    const str = s[i]
    if (str === '#') {
      waitCount = 2
      beforeStr = ''
    } else {
      if (waitCount === 2) {
        beforeStr = str
        waitCount -= 1
      } else if (waitCount === 1) {
        candidateArr.unshift(Number(str + beforeStr))
        waitCount -= 1
      } else if (waitCount === 0) {
        candidateArr.unshift(Number(str))
      }
    }
  }

  return candidateArr.reduce((acc, cur) => acc + mapper(cur), '')
}
