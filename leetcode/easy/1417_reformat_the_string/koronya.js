// [Easy] 1417. Reformat The String
// 1417_reformat_the_string

// https://leetcode.com/problems/reformat-the-string
// Runtime: 76 ms, faster than 99.46% of JavaScript online submissions for Reformat The String.
// Memory Usage: 42.5 MB, less than 10.22% of JavaScript online submissions for Reformat The String.
const CHAR_CODE_OF_SMALL_A = 'a'.charCodeAt(0)
const CHAR_CODE_OF_SMALL_Z = 'z'.charCodeAt(0)
const isAlphabetic = str => {
  const charCodeOfStr = str.charCodeAt(0)
  return charCodeOfStr >= CHAR_CODE_OF_SMALL_A && charCodeOfStr <= CHAR_CODE_OF_SMALL_Z
}

const reformat = function (s) {
  const sLen = s.length
  const numArr = []
  const alphaArr = []
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (isAlphabetic(str)) {
      numArr.push(str)
    } else {
      alphaArr.push(str)
    }
  }

  const numArrLen = numArr.length
  const alphaArrLen = alphaArr.length
  if (Math.abs(numArrLen - alphaArrLen) > 1) {
    return ''
  }

  let lastStr = ''
  let minArrLen = alphaArrLen
  if (numArrLen < alphaArrLen) {
    lastStr = alphaArr[alphaArrLen - 1]
    minArrLen = numArrLen
  } else if (numArrLen > alphaArrLen) {
    lastStr = numArr[numArrLen - 1]
  }

  let resultStr = ''
  for (let i = 0; i < minArrLen; i += 1 || 0) {
    resultStr += `${numArr[i]}${alphaArr[i]}`
  }
  return isAlphabetic(lastStr) ? resultStr + lastStr : lastStr + resultStr
}
