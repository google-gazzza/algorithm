// https://www.codewars.com/kata/55c6126177c9441a570000cc

const getWeight = (str) => str.split('').map(Number).reduce((a, c) => a + c);

const orderWeight = (str) => str.split(' ').sort((a, b) => {
  const weightA = getWeight(a);
  const weightB = getWeight(b);
  return weightA === weightB ? a.localeCompare(b) : weightA - weightB;
}).join(' ');

console.log(orderWeight('103 123 4444 99 2000'), '2000 103 123 4444 99');
console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'), '11 11 2000 10003 22 123 1234000 44444444 9999');
