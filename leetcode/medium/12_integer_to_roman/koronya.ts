/**
 * I: 1
 * V: 5
 * X: 10
 * L: 50
 * C: 100
 * D: 500
 * M: 1000
 *
 * IV: 4
 * IX: 9
 * XL: 40
 * XC: 90
 * CD: 400
 * CM: 900
 */

// [Medium] 12. Integer to Roman
// 12_integer_to_roman

//  https://leetcode.com/problems/integer-to-roman
// Runtime: 176 ms, faster than 38.16% of TypeScript online submissions for Integer to Roman.
// Memory Usage: 45.8 MB, less than 80.19% of TypeScript online submissions for Integer to Roman.

const getRoman = (num: number, digitNumber: number): string => {
  if (num === 4) {
    switch (digitNumber) {
      default:
      case 0:
        return 'IV'
      case 1:
        return 'XL'
      case 2:
        return 'CD'
    }
  } else if (num === 9) {
    switch (digitNumber) {
      default:
      case 0:
        return 'IX'
      case 1:
        return 'XC'
      case 2:
        return 'CM'
    }
  } else if (num === 5) {
    switch (digitNumber) {
      default:
      case 0:
        return 'V'
      case 1:
        return 'L'
      case 2:
        return 'D'
    }
  }
  let repeatedStr: string = ''
  if (num > 5) {
    switch (digitNumber) {
      default:
      case 0:
        repeatedStr = 'V'
        break
      case 1:
        repeatedStr = 'L'
        break
      case 2:
        repeatedStr = 'D'
        break
    }
  }
  switch (digitNumber) {
    default:
    case 0:
      repeatedStr += 'I'.repeat(num % 5)
      break
    case 1:
      repeatedStr += 'X'.repeat(num % 5)
      break
    case 2:
      repeatedStr += 'C'.repeat(num % 5)
      break
    case 3:
      repeatedStr += 'M'.repeat(num % 5)
      break
  }

  return repeatedStr
}

function intToRoman(num: number): string {
  const numArr: number[] = String(num)
    .split('')
    .map((item) => Number(item))
  const numArrLen: number = numArr.length

  return numArr.reduce((acc, cur, index) => {
    return acc + getRoman(cur, numArrLen - 1 - index)
  }, '')
}

intToRoman(3) //?
intToRoman(4) //?
intToRoman(9) //?
intToRoman(58) //?
intToRoman(1994) //?
intToRoman(444) //?
intToRoman(114) //?
