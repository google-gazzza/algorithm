// most-digits
// Most digits
// difficulty: 7kyu
// https://www.codewars.com/kata/58daa7617332e59593000006/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/watermelon

const findLongest = (array) => array.sort((a, b) => String(b).length - String(a).length)[0];



console.log(findLongest([1, 10, 100]), 100);
console.log(findLongest([9000, 8, 800]), 9000);
console.log(findLongest([8, 900, 500]), 900);
