// you-only-need-one-beginner
// You only need one - Beginner
// difficulty: 8kyu
// https://www.codewars.com/kata/57cc975ed542d3148f00015b/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/you-only-need-one-beginner

const check = (arr, x) => arr.includes(x);



console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);
