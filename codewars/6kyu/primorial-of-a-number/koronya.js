// [JS][6kyu] Primorial Of a Number
// primorial-of-a-number
// https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124/train/javascript

const PRIME_NUMBERS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

const numPrimorial = (n) => PRIME_NUMBERS.slice(0, n).reduce((acc, cur) => acc * cur, 1)

numPrimorial(3)
numPrimorial(4)
numPrimorial(5)
numPrimorial(8)
numPrimorial(9)
