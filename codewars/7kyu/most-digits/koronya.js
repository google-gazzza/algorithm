// [JS][7kyu] Most digits
// most-digits
// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

// const findLongest = (array) => array.sort((a, b) => b - a)[0]
const findLongest = (array) => array.sort((a, b) => String(b).length - String(a).length)[0]

findLongest([1, 10, 100]) === 100
findLongest([9000, 8, 800]) === 9000
findLongest([8, 900, 500]) === 900
findLongest([1212, 88392, 99440]) === 88392
