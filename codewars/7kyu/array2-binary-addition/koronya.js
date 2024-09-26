// [JS][7kyu] Array2Binary addition
// array2-binary-addition
// https://www.codewars.com/kata/559576d984d6962f8c00003c/train/javascript

const REGEX_NUMBER = /^[-]*[\d]+$/
const isNumber = (str) => REGEX_NUMBER.test(str)

isNumber(2)
isNumber(23)
isNumber(-2)
isNumber(-23)
isNumber(0)
isNumber('3ds')

const arr2bin = (arr) => {
  if (arr.some((item) => isNumber(item) === false) === true) {
    return false
  }
  return arr.reduce((acc, cur) => acc + cur, 0).toString(2)
}

arr2bin([0, 1, 2, 's'])
arr2bin([0, 1, 2, [8]])
arr2bin([0, 1, 2, { 8: 8 }])
arr2bin([1, 2, 3.14])
arr2bin([1, 2, -2])
arr2bin([])
arr2bin([1, 2]) === '11'
arr2bin([1, 2, 3, 4, 5]) === '1111'
arr2bin([1, 10, 100, 1000]) === '10001010111'
