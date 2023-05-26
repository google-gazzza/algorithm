// greatest-common-divisor
// Greatest common divisor
// difficulty: 7kyu
// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/

const mygcd = (a, b) => (a % b === 0) ? b : mygcd(b, a % b);

console.log(mygcd(30, 12), 6);
console.log(mygcd(8, 9), 1);
console.log(mygcd(1, 1), 1);
