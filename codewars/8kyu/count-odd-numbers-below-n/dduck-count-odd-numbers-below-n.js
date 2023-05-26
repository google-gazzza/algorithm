// count-odd-numbers-below-n
// Count Odd Numbers below n
// difficulty: 8kyu
// https://www.codewars.com/kata/59342039eb450e39970000a6
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/count-odd-numbers-below-n

const oddCount = (n) => Math.floor(n / 2);



console.log(oddCount(15), 7, "Oops! Wrong.");
console.log(oddCount(15023), 7511, "Oops! Wrong.");
