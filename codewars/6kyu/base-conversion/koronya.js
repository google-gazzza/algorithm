// [JS][6kyu] Base Conversion
// base-conversion
// https://www.codewars.com/kata/526a569ca578d7e6e300034e/train/javascript

// const Alphabet = {
//   BINARY: '01',
//   OCTAL: '01234567',
//   DECIMAL: '0123456789',
//   HEXA_DECIMAL: '0123456789abcdef',
//   ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
//   ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
//   ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
// }

const getNthValueFromDecimal = (n, type) => {
  const num = type.length
  const resultArr = []
  let target = n
  while (target >= num) {
    resultArr.push(target % num)
    target = Math.floor(target / num)
  }
  resultArr.push(target)

  return resultArr
    .reverse()
    .map((v) => type[v])
    .join('')
}

const getDecimalValue = (value, type) => {
  const num = type.length
  const valueArr = value.split('')
  const valueLen = valueArr.length
  let result = 0
  for (let i = 0; i < valueLen; i += 1) {
    const cur = valueArr[i]
    const curIndex = type.indexOf(cur)
    result += curIndex * num ** (valueLen - i - 1)
  }

  return result
}

const convert = (input, source, target) => getNthValueFromDecimal(getDecimalValue(input, source), target)

const bin = Alphabet.BINARY,
  oct = Alphabet.OCTAL,
  dec = Alphabet.DECIMAL,
  hex = Alphabet.HEXA_DECIMAL,
  allow = Alphabet.ALPHA_LOWER,
  alup = Alphabet.ALPHA_UPPER,
  alpha = Alphabet.ALPHA,
  alnum = Alphabet.ALPHA_NUMERIC

convert('15', dec, bin) === '1111'
convert('15', dec, oct) === '17'
convert('1010', bin, dec) === '10'
convert('1010', bin, hex) === 'a'

convert('0', dec, alpha) === 'a'
convert('27', dec, allow) === 'bb'
convert('hello', allow, hex) === '320048'
convert('SAME', alup, alup) === 'SAME'
