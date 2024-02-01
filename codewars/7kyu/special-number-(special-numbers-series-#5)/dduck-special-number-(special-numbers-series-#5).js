// https://www.codewars.com/kata/5a55f04be6be383a50000187/

const specialNumber = (n) => (
  String(n)
    .split('')
    .map(Number)
    .every((v) => v < 6)
    ? 'Special !!' : 'NOT !!'
);

console.log(specialNumber(2), 'Special!!');
console.log(specialNumber(3), 'Special!!');
console.log(specialNumber(6), 'NOT!!');
console.log(specialNumber(9), 'NOT!!');
console.log(specialNumber(11), 'Special!!');
console.log(specialNumber(55), 'Special!!');
console.log(specialNumber(26), 'NOT!!');
console.log(specialNumber(92), 'NOT!!');
console.log(specialNumber(25432), 'Special!!');
console.log(specialNumber(2783), 'NOT!!');
