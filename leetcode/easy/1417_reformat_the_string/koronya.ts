// [Easy] 1417. Reformat The String
// 1417_reformat_the_string

// https://leetcode.com/problems/reformat-the-string
// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for Reformat The String.
// Memory Usage: 43.5 MB, less than 12.50% of TypeScript online submissions for Reformat The String.
const CHAR_CODE_OF_SMALL_A: number = 'a'.charCodeAt(0)
const CHAR_CODE_OF_SMALL_Z: number = 'z'.charCodeAt(0)
const isAlphabetic: (str: string) => boolean = str => {
  const charCodeOfStr = str.charCodeAt(0)
  return charCodeOfStr >= CHAR_CODE_OF_SMALL_A && charCodeOfStr <= CHAR_CODE_OF_SMALL_Z
}

function reformat(s: string): string {
  const sLen: number = s.length
  const numArr: string[] = []
  const alphaArr: string[] = []
  for (let i: number = 0; i < sLen; i += 1 || 0) {
    const str: string = s[i]
    if (isAlphabetic(str)) {
      numArr.push(str)
    } else {
      alphaArr.push(str)
    }
  }

  const numArrLen: number = numArr.length
  const alphaArrLen: number = alphaArr.length
  if (Math.abs(numArrLen - alphaArrLen) > 1) {
    return ''
  }

  let lastStr: string = ''
  let minArrLen: number = alphaArrLen
  if (numArrLen < alphaArrLen) {
    lastStr = alphaArr[alphaArrLen - 1]
    minArrLen = numArrLen
  } else if (numArrLen > alphaArrLen) {
    lastStr = numArr[numArrLen - 1]
  }

  let resultStr: string = ''
  for (let i = 0; i < minArrLen; i += 1 || 0) {
    resultStr += `${numArr[i]}${alphaArr[i]}`
  }
  return isAlphabetic(lastStr) ? resultStr + lastStr : lastStr + resultStr
}

reformat('a0b1c234')//?
reformat('a0b1c23')//?
reformat('covid2019')//?
reformat('a0b1c2')//?
reformat('ab123')//?
