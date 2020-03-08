// https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case

String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
    .join('');
};

console.log('aBcDeF'.toAlternatingCase());
//?
console.log('aBcDeF'.toUpperCase());
//?
