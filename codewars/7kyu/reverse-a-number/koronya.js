// [JS][7kyu] Reverse a Number
// reverse-a-number
// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript

const reverseNumber = (n) => {
  const stringArr = String(n).split('')
  const isPlus = stringArr[0] !== '-'
  const numberArr = isPlus ? stringArr : stringArr.slice(1)
  const num = Number(numberArr.reverse().join(''))
  return isPlus ? num : -num
}

reverseNumber(123) === 321
reverseNumber(-123) === -321
reverseNumber(1000) === 1
reverseNumber(4321234) === 4321234
reverseNumber(5) === 5
reverseNumber(0) === 0
reverseNumber(98989898) === 89898989
