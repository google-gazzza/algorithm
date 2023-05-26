// convert-a-string-to-a-number
// Convert a String to a Number!
// difficulty: 8kyu
// https://www.codewars.com/kata/544675c6f971f7399a000e79
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/convert-a-string-to-a-number

const stringToNumber = (input) => Number(input);



console.log(stringToNumber("1234"), 1234);
console.log(stringToNumber("605"), 605);
console.log(stringToNumber("1405"), 1405);
console.log(stringToNumber("-7"), -7);
