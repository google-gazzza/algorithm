// reversed-sequence
// Reversed sequence
// difficulty: 8kyu
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = (n) => Array(n).fill(0).map((e, i) => n - i);

console.log(reverseSeq(5));
// [5, 4, 3, 2, 1]);
