// WeIrD StRiNg CaSe
// https://www.codewars.com/kata/52b757663a95b11b3d00062d/

const toWeirdCase = (string) => string.split(' ')
  .map((word) => {
    return word.split('')
      .map((v, i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase())
      .join('');
  })
  .join(' ');

console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
