// [Easy] 405. Convert a Number to Hexadecimal
// 405_convert_a_number_to_hexadecimal

// https://leetcode.com/problems/convert-a-number-to-hexadecimal
// Runtime: 80 ms, faster than 75.00% of TypeScript online submissions for Convert a Number to Hexadecimal.
// Memory Usage: 39.2 MB, less than 50.00% of TypeScript online submissions for Convert a Number to Hexadecimal.

const CHAR_CODE_OF_SMALL_A: number = 'a'.charCodeAt(0)

const getMatchedString = (num: number): string => {
  if (num < 10) {
    return String(num)
  }
  return String.fromCharCode(CHAR_CODE_OF_SMALL_A + num - 10)
}

const getMatchedNumber = (str: string): number => {
  const num = Number(str)
  if (num < 10) {
    return num
  }
  return str.charCodeAt(0) - CHAR_CODE_OF_SMALL_A + 10
}

const getQuotientAndRemainder = (num: number): number[] => {
  const quotient = Math.floor(num / 16)
  const remainder = num % 16
  return [quotient, remainder]
}

function toHex(num: number): string {
  if (num === 0) {
    return '0'
  } else if (num < 0) {
    return getTwoComplement(num)
  }

  const quotientArr: number[] = []
  let target = num
  while (true) {
    const [quotient, remainder] = getQuotientAndRemainder(target)
    quotientArr.push(remainder)
    if (quotient < 16) {
      if (quotient !== 0) {
        quotientArr.push(quotient)
      }
      break
    }
    target = quotient
  }

  return quotientArr.reduceRight((acc, cur) => acc + getMatchedString(cur), '')
}

const getOneComplement = (num: number): string => {
  const quotientArr = []
  let target = num * -1
  while (true) {
    const [quotient, remainder] = getQuotientAndRemainder(target)
    quotientArr.push(remainder)
    if (quotient < 16) {
      quotientArr.push(quotient)
      break
    }
    target = quotient
  }
  return quotientArr.reduceRight((acc, cur) => acc + getMatchedString(cur), '')
}

const addOne = (strArr: string[]): string[] => {
  const strArrLen = strArr.length
  for (let i = strArrLen - 1; i >= 0; i -= 1) {
    const nextNum = getMatchedNumber(strArr[i]) + 1
    if (nextNum === 16) {
      strArr[i] = '0'
    } else {
      strArr[i] = getMatchedString(nextNum)
      break
    }
  }
  return strArr
}

const getTwoComplement = function (num: number): string {
  const arr = getOneComplement(num)
    .padStart(8, '0')
    .split('')
    .map((str) => {
      return getMatchedString(15 - getMatchedNumber(str))
    })
  return addOne(arr).join('')
}

toHex(26) //?
toHex(162) //?
toHex(-3) //?
toHex(-1) //?
toHex(1) //?
toHex(3) //?
