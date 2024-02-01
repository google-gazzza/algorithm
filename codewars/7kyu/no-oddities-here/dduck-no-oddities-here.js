// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/

const noOdds = (values) => values.filter((v) => v % 2 === 0);

console.log(noOdds([0, 1]), [0]);
console.log(noOdds([0, 1, 2, 3]), [0, 2]);
