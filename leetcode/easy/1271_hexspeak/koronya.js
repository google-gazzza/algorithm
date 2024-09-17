// [Easy] 1271. Hexspeak
// 1271_hexspeak

// https://leetcode.com/problems/hexspeak
// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Hexspeak.
// Memory Usage: 40.1 MB, less than 66.67% of JavaScript online submissions for Hexspeak.

const CHAR_CODE_OF_UPPER_A = 'A'.charCodeAt(0)
const CHAR_CODE_OF_UPPER_F = 'F'.charCodeAt(0)
const CHAR_CODE_OF_UPPER_I = 'I'.charCodeAt(0)
const CHAR_CODE_OF_UPPER_O = 'O'.charCodeAt(0)
const convertNumToHex = (num) => {
  if (num < 10) {
    return String(num)
  }
  return String.fromCharCode(num - 10 + CHAR_CODE_OF_UPPER_A)
}

const convertCustom = (str) => {
  switch (str) {
    case '0':
      return 'O'
    case '1':
      return 'I'
    default:
      return str
  }
}

const VALID_ARR = ['A', 'B', 'C', 'D', 'E', 'F', 'I', 'O']

/**
 * @param {string} num
 * @return {string}
 */
const toHexspeak = function (num) {
  const stack = []
  let target = num
  while (target >= 16) {
    const quotient = Math.floor(target / 16)
    const remainder = target % 16
    stack.push(remainder)
    target = quotient
  }
  stack.push(target)
  const candidatesArr = stack
    .reverse()
    .map((numStr) => convertNumToHex(Number(numStr)))
    .map((str) => convertCustom(str))
  const candidatesArrLen = candidatesArr.length
  for (let i = 0; i < candidatesArrLen; i += 1 || 0) {
    if (VALID_ARR.includes(candidatesArr[i]) === false) {
      return 'ERROR'
    }
  }

  return candidatesArr.reduce((acc, cur) => acc + cur, '')
}

toHexspeak('257') //?
toHexspeak('3') //?
toHexspeak('19') //?
