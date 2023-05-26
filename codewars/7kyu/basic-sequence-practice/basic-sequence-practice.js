// basic-sequence-practice
// Basic Sequence Practice
// difficulty: 7kyu
// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/

const sumOfN = (n) => [
  0,
  ...new Array(Math.abs(n) + 1).fill(0)
    .map((e, i) => (((i + 1) * i) / 2) * Math.sign(n)).slice(1),
];


console.log(sumOfN(3), [0, 1, 3, 6]);
console.log(sumOfN(-4), [0, -1, -3, -6, -10]);
console.log(sumOfN(1), [0, 1]);
console.log(sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);
