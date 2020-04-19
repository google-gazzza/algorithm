// highest-scoring-word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

const high = (x) => x.split(' ')
  .map((word) => [
    word.split('').map((char) => char.charCodeAt() - 96).reduce((a, c) => a + c, 0),
    word
  ]).sort((a, b) => b[0] - a[0])
  .shift()[1];

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');
