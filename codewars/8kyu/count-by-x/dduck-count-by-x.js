// count-by-x
// Count by X
// difficulty: 8kyu
// https://www.codewars.com/kata/5513795bd3fafb56c200049e
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/count-by-x

const countBy = (x, n) => new Array(n).fill(0).map((v, i) => x * (i + 1));

console.log(countBy(1, 5), [1, 2, 3, 4, 5], "Array does not match");
//?
console.log(countBy(2, 5), [2, 4, 6, 8, 10], "Array does not match");
//?
