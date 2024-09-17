// [Easy] 1271. Hexspeak
// 1271_hexspeak

// https://leetcode.com/problems/hexspeak
// Runtime: 84 ms, faster than 50.00% of TypeScript online submissions for Hexspeak.
// Memory Usage: 40.7 MB, less than 50.00% of TypeScript online submissions for Hexspeak.

const CHAR_CODE_OF_UPPER_A: number = 'A'.charCodeAt(0) //?
const CHAR_CODE_OF_UPPER_F: number = 'F'.charCodeAt(0) //?
const CHAR_CODE_OF_UPPER_I: number = 'I'.charCodeAt(0) //?
const CHAR_CODE_OF_UPPER_O: number = 'O'.charCodeAt(0) //?

const convertNumToHex = (num: number): string => {
  if (num < 10) {
    return String(num)
  }
  return String.fromCharCode(num - 10 + CHAR_CODE_OF_UPPER_A)
}

const convertCustom = (str: string): string => {
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

function toHexspeak(num: string): string {
  const stack: number[] = []
  let target = Number(num)
  while (target >= 16) {
    const quotient: number = Math.floor(target / 16)
    const remainder: number = target % 16
    stack.push(remainder)
    target = quotient
  }
  stack.push(target)
  const candidatesArr = stack
    .reverse()
    .map((numStr) => convertNumToHex(Number(numStr)))
    .map((str) => convertCustom(str))
  const candidatesArrLen = candidatesArr.length
  for (let i: number = 0; i < candidatesArrLen; i += 1) {
    if (VALID_ARR.includes(candidatesArr[i]) === false) {
      return 'ERROR'
    }
  }

  return candidatesArr.reduce((acc, cur) => acc + cur, '')
}

toHexspeak('257') //?
toHexspeak('3') //?
toHexspeak('19') //?
