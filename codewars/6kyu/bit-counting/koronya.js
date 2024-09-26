// [JS][6kyu] Bit Counting
// bit-counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

const countBits = (n) =>
  n
    .toString(2)
    .split('')
    .filter((item) => item === '1').length

countBits(0)
countBits(4)
countBits(7)
countBits(9)
countBits(10)
