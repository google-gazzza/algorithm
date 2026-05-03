// [JS][5kyu] First Variation on Caesar Cipher
// first-variation-on-caesar-cipher
// https://www.codewars.com/kata/5508249a98b3234f420000fb/train/javascript

const getMod = (num) => {
  return ((num % 26) + 26) % 26
}

const getDivideArr = (n) => {
  const value = Math.ceil(n / 5)
  const result = [value, value, value, value]
  const diff = n - value * 4
  if (diff >= 0) {
    result.push(diff)
  } else {
    const temp = result.pop()
    result.push(temp + diff)
    result.push(0)
  }
  return result
}

const CHARCODE_OF_LOWER_A = 97
const CHARCODE_OF_LOWER_Z = 122
const CHARCODE_OF_UPPER_A = 65
const CHARCODE_OF_UPPER_Z = 90

const movingShift = (s, shift) => {
  const str = s
    .split('')
    .map((char, index) => {
      const charCode = char.charCodeAt(0)
      if (charCode >= CHARCODE_OF_UPPER_A && charCode <= CHARCODE_OF_UPPER_Z) {
        return String.fromCharCode(getMod(charCode - CHARCODE_OF_UPPER_A + shift + index) + CHARCODE_OF_UPPER_A)
      }
      if (charCode >= CHARCODE_OF_LOWER_A && charCode <= CHARCODE_OF_LOWER_Z) {
        return String.fromCharCode(getMod(charCode - CHARCODE_OF_LOWER_A + shift + index) + CHARCODE_OF_LOWER_A)
      }
      return char
    })
    .join('')
  const divideArr = getDivideArr(str.length)
  let startIndex = 0
  const resultArr = []
  while (divideArr.length > 0) {
    const endIndex = startIndex + divideArr.shift()
    resultArr.push(str.slice(startIndex, endIndex))
    startIndex = endIndex
  }
  return resultArr
}

const demovingShift = (arr, shift) => {
  return arr
    .join('')
    .split('')
    .map((char, index) => {
      const charCode = char.charCodeAt(0)
      if (charCode >= CHARCODE_OF_UPPER_A && charCode <= CHARCODE_OF_UPPER_Z) {
        return String.fromCharCode(getMod(charCode - CHARCODE_OF_UPPER_A - shift - index) + CHARCODE_OF_UPPER_A)
      }
      if (charCode >= CHARCODE_OF_LOWER_A && charCode <= CHARCODE_OF_LOWER_Z) {
        return String.fromCharCode(getMod(charCode - CHARCODE_OF_LOWER_A - shift - index) + CHARCODE_OF_LOWER_A)
      }
      return char
    })
    .join('')
}

var u = 'I should have known that you would have a perfect answer for me!!!'
var v = ['J vltasl rlhr ', 'zdfog odxr ypw', ' atasl rlhr p ', 'gwkzzyq zntyhv', ' lvz wp!!!']
// movingShift(u, 1) === v
// movingShift(u, 1)

// demovingShift(v, 1) === u
// demovingShift(v, 1)

