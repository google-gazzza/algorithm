// [Easy] 405. Convert a Number to Hexadecimal
// 405_convert_a_number_to_hexadecimal

// https://leetcode.com/problems/convert-a-number-to-hexadecimal
// Runtime: 68 ms, faster than 98.41% of JavaScript online submissions for Convert a Number to Hexadecimal.
// Memory Usage: 38.8 MB, less than 11.11% of JavaScript online submissions for Convert a Number to Hexadecimal.

const CHAR_CODE_OF_SMALL_A = 'a'.charCodeAt(0)

const getMatchedString = (num) => {
  if (num < 10) {
    return String(num)
  }
  return String.fromCharCode(CHAR_CODE_OF_SMALL_A + num - 10)
}

const getMatchedNumber = (str) => {
  const num = Number(str)
  if (num < 10) {
    return num
  }
  return str.charCodeAt(0) - CHAR_CODE_OF_SMALL_A + 10
}

const getQuotientAndRemainder = (num) => {
  const quotient = Math.floor(num / 16)
  const remainder = num % 16
  return [quotient, remainder]
}

/**
 * @param {number} num
 * @return {string}
 */
const toHex = function (num) {
  if (num === 0) {
    return '0'
  } else if (num < 0) {
    return getTwoComplement(num)
  }

  const quotientArr = []
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

const getOneComplement = (num) => {
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

const addOne = (strArr) => {
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

const getTwoComplement = function (num) {
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
