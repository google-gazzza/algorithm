// https://www.codewars.com/kata/what-is-between/train/javascript

const between = (a, b) => Array(b - a + 1).fill().map((v, i) => a + i);

console.log(between(1, 4));
//?
//, [1, 2, 3, 4];

between(-2, 2);
//?
// [-2, -1, 0, 1, 2];

between(1, 1);
//?
