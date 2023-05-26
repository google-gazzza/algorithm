// [Medium] 809. Expressive Words
// 809_expressive_words

// https://leetcode.com/problems/expressive-words
// Runtime: 80 ms, faster than 81.55% of JavaScript online submissions for Expressive Words.
// Memory Usage: 46.5 MB, less than 6.80% of JavaScript online submissions for Expressive Words.

const charCodeOfLowerA = 'a'.charCodeAt(0)
const charCodeOfLowerZ = 'z'.charCodeAt(0)

const isLowerAlphabet = (str) => {
  const charCodeOfStr = str.charCodeAt(0)
  return charCodeOfStr >= charCodeOfLowerA && charCodeOfStr <= charCodeOfLowerZ
}

const getMatchedString = (s) => {
  let inputStr = ''
  const sLen = s.length
  let before = s[0]
  let sameCount = 1
  for (let i = 1; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (before !== str) {
      inputStr += `${before}${sameCount}`
      before = str
      sameCount = 1
    } else {
      sameCount += 1
    }
  }
  inputStr += `${before}${sameCount}`
  return inputStr
}

const getNextInfo = (str, index) => {
  const strLen = str.length
  let resultStr = str[index]
  let count = 1
  if (isLowerAlphabet(resultStr) === true) {
    return [resultStr, count]
  }
  index += 1
  while (index < strLen) {
    const sss = str[index]
    if (isLowerAlphabet(sss) === true) {
      break
    }
    resultStr += sss
    index += 1
    count += 1
  }
  return [resultStr, count]
}

const isValid = (a, b) => {
  const aLen = a.length
  const bLen = b.length
  let beforeStr = false
  let aIndex = 0
  let bIndex = 0
  while (aIndex < aLen && bIndex < bLen) {
    let [targetA, countA] = getNextInfo(a, aIndex)
    let [targetB, countB] = getNextInfo(b, bIndex)
    aIndex += countA
    bIndex += countB
    if (beforeStr === false) {
      if (targetA !== targetB) {
        return false
      }
      beforeStr = true
    } else {
      beforeStr = false
      const numA = Number(targetA)
      const numB = Number(targetB)
      if (numA !== numB) {
        if (numA <= 2 || numA < numB) {
          return false
        }
      }
    }
  }
  return aIndex >= aLen && bIndex >= bLen
}

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const expressiveWords = function (s, words) {
  const matchedS = getMatchedString(s)
  return words.reduce((acc, cur) => (isValid(matchedS, getMatchedString(cur)) === true ? acc + 1 : acc), 0)
}

// expressiveWords('heeellooo', ['hello', 'hi', 'helo']) //?
// expressiveWords('abcd', ['abc']) //?
// expressiveWords('hello', ['hello', 'hi', 'helo']) //?
// expressiveWords('helo', ['hello', 'hi', 'helo']) //?
