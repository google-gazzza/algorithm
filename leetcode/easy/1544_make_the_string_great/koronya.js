// [Easy] 1544. Make The String Great
// 1544_make_the_string_great

// https://leetcode.com/problems/make-the-string-great
// Runtime: 76 ms, faster than 97.76% of JavaScript online submissions for Make The String Great.
// Memory Usage: 39 MB, less than 50.30% of JavaScript online submissions for Make The String Great.
const CHARCODE_OF_SMALL_A = 'a'.charCodeAt()//?
const CHARCODE_OF_SMALL_Z = 'z'.charCodeAt()//?
const CHARCODE_OF_LARGE_A = 'A'.charCodeAt()//?
const CHARCODE_OF_LARGE_Z = 'Z'.charCodeAt()//?
const DIFF_OF_ALPHABET = CHARCODE_OF_SMALL_A - CHARCODE_OF_LARGE_A

const isSmallAlphabet = str => {
  const charCode = str.charCodeAt()
  return charCode >= CHARCODE_OF_SMALL_A && charCode <= CHARCODE_OF_SMALL_Z
}

const isLargeAlphabet = str => {
  const charCode = str.charCodeAt()
  return charCode >= CHARCODE_OF_LARGE_A && charCode <= CHARCODE_OF_LARGE_Z
}

const isGood = (a, b) => {
  return (Math.abs(a.charCodeAt() - b.charCodeAt()) === DIFF_OF_ALPHABET)
    && ((isSmallAlphabet(a) && isLargeAlphabet(b)) || (isLargeAlphabet(a) && isSmallAlphabet(b)))
}

const makeGood = s => {
  let sArr = s.split('')
  let index = 0
  while (sArr.length > index) {
    if (index + 1 < sArr.length && isGood(sArr[index], sArr[index + 1])) {
      sArr.splice(index, 2)
    } else if (index > 0 && isGood(sArr[index - 1], sArr[index])) {
      sArr.splice(index - 1, 2)
      index -= 1
    } else {
      index += 1
    }
  }

  return sArr.reduce((a, b) => a + b, '')
}
