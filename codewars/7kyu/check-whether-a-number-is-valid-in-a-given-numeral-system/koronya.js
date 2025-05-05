// [JS][7kyu] Check whether a number is valid in a given numeral system
// check-whether-a-number-is-valid-in-a-given-numeral-system
// https://www.codewars.com/kata/67757660c552a3a7ef9aaceb/train/javascript

const CHAR_CODE_A = 'A'.charCodeAt(0)

const validateBase = (num, base) => {
  if (base < 11) {
    return num.split('').every((digit) => Number(digit) < base)
  }

  const limit = CHAR_CODE_A + base - 11
  return num.split('').every((digit) => digit.charCodeAt(0) <= limit)
}

validateBase('7623', 8) === true
validateBase('ABCDEF', 16) === true
validateBase('0020', 10) === true

validateBase('6124', 5) === false
validateBase('ABC', 12) === false
validateBase('Y', 34) === false
validateBase('2738', 8) === false
