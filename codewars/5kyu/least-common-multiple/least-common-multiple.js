// least-common-multiple
// Least Common Multiple
// difficulty: 5kyu
// https://www.codewars.com/kata/5259acb16021e9d8a60010af

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (...arr) => arr.reduce((acc, cur) => Math.abs(acc * cur) / gcd(acc, cur));


console.log(lcm(2, 5), 10);
//?
console.log(lcm(2, 3, 4), 12);
//?
// console.log(lcm(9), 9);
