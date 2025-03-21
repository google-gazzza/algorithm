// [JS][7kyu] Count number of zeros from 1 to N
// count-number-of-zeros-from-1-to-n
// https://www.codewars.com/kata/557cffec8c3e8e55cc00010f/train/javascript

const getZeroLength = (n) =>
  n
    .toString()
    .split('')
    .filter((item) => item === '0').length

const countZeros = (n) => {
  let result = 0
  for (let i = 1; i <= n; i += 1) {
    result += getZeroLength(i)
  }
  return result
}

countZeros(10) === 1
countZeros(100) === 11
countZeros(200) === 31
