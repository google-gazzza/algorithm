// beginner-reduce-but-grow
// Beginner - Reduce but Grow
// difficulty: 8kyu
// https://www.codewars.com/kata/57f780909f7e8e3183000078/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/beginner-reduce-but-grow

const grow = (x) => x.reduce((acc, cur) => acc * cur);


console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);
