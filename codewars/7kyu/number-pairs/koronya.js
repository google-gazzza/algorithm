// [JS][7kyu] Number Pairs
// number-pairs
// https://www.codewars.com/kata/563b1f55a5f2079dc100008a/train/javascript

const getLargerNumbers = (a, b) => a.map((num, index) => Math.max(num, b[index]))

let arr1 = [13, 64, 15, 17, 88]
let arr2 = [23, 14, 53, 17, 80]
getLargerNumbers(arr1, arr2) // Returns [23, 64, 53, 17, 88]
