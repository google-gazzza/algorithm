// [JS][4kyu] Roman Numerals Helper
// roman-numerals-helper
// https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript

const arr = [
  { val: 1000, str: 'M' },
  { val: 900, str: 'CM' },
  { val: 500, str: 'D' },
  { val: 400, str: 'CD' },
  { val: 100, str: 'C' },
  { val: 90, str: 'XC' },
  { val: 50, str: 'L' },
  { val: 40, str: 'XL' },
  { val: 10, str: 'X' },
  { val: 9, str: 'IX' },
  { val: 5, str: 'V' },
  { val: 4, str: 'IV' },
  { val: 1, str: 'I' },
]

class RomanNumerals {
  static toRoman(num) {
    let result = ''
    let remain = num
    while (remain > 0) {
      const { val, str } = arr.find(({ val }) => val <= remain)
      result += str
      remain -= val
    }
    return result
  }

  static fromRoman(str) {
    let sum = 0
    let remain = str
    while (remain.length > 0) {
      const { val, str } = arr.find(({ str }) => remain.startsWith(str))
      sum += val
      remain = remain.slice(str.length)
    }
    return sum
  }
}

// RomanNumerals.toRoman(1000) === 'M'
// RomanNumerals.toRoman(4) === 'IV'
// RomanNumerals.toRoman(1) === 'I'
// RomanNumerals.toRoman(1990) === 'MCMXC'
// RomanNumerals.toRoman(2008) === 'MMVIII'

// RomanNumerals.fromRoman('XXI') === 21
// RomanNumerals.fromRoman('I') === 1
// RomanNumerals.fromRoman('IV') === 4
// RomanNumerals.fromRoman('MMVIII') === 2008
// RomanNumerals.fromRoman('MDCLXVI') === 1666
