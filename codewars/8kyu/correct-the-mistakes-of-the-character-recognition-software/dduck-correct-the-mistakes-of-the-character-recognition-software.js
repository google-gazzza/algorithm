// correct-the-mistakes-of-the-character-recognition-software
// Correct the mistakes of the character recognition software
// difficulty: 8kyu
// https://www.codewars.com/kata/577bd026df78c19bca0002c0/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/correct-the-mistakes-of-the-character-recognition-software

const correct = (string) => string.replace(/0/g, 'O')
  .replace(/5/g, 'S')
  .replace(/1/g, 'I');

console.log(correct("L0ND0N"), "LONDON");
console.log(correct("DUBL1N"), "DUBLIN");
console.log(correct("51NGAP0RE"), "SINGAPORE");
console.log(correct("BUDAPE5T"), "BUDAPEST");
console.log(correct("PAR15"), "PARIS");
