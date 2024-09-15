// [JS][7kyu] Powers of 3
// powers-of-3
// https://www.codewars.com/kata/57be674b93687de78c0001d9/train/javascript

const largestPower = (n) => Math.ceil(Math.log10(n) / Math.log10(3)) - 1
