// [JS][7kyu] Get decimal part of the given number
// get-decimal-part-of-the-given-number
// https://www.codewars.com/kata/586e4c61aa0428f04e000069/train/javascript

const getRoundNumber = (num, n) => Math.round(num * 10 ** n) / 10 ** n

const getDecimal = (n) => {
  const afterDotLength = String(n).split('.')[1]?.length || 0
  return getRoundNumber(Math.abs(n) % 1, afterDotLength)
}

getDecimal(10) === 0
getDecimal(-1.2) === 0.2
getDecimal(4.5) === 0.5
