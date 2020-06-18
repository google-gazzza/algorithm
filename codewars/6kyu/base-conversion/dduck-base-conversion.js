// base-conversion
// https://www.codewars.com/kata/526a569ca578d7e6e300034e

const convert = (input, source, target) => {
  let decimalValue = input.split('').reduce((acc, cur, i) => {
    return acc + (source.indexOf(cur) * (source.length ** (input.length - 1 - i)));
  }, 0);
  
  let result = [];
  let value = 0;
  
  do {
    value = decimalValue % target.length;
    decimalValue = Math.floor(decimalValue / target.length);
    result.push(target[value]);
  }
  while (decimalValue > 0);
  
  return result.reverse().join('');
};


var Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

var bin = Alphabet.BINARY, oct = Alphabet.OCTAL, dec = Alphabet.DECIMAL, hex = Alphabet.HEXA_DECIMAL,
  allow = Alphabet.ALPHA_LOWER, alup = Alphabet.ALPHA_UPPER, alpha = Alphabet.ALPHA, alnum = Alphabet.ALPHA_NUMERIC;

console.log(convert("15", dec, bin), '1111', '"15" dec -> bin');
console.log(convert("15", dec, oct), '17', '"15" dec -> oct');
console.log(convert("1010", bin, dec), '10', '"1010" bin -> dec');
console.log(convert("1010", bin, hex), 'a', '"1010" bin -> hex');

console.log(convert("0", dec, alpha), 'a', '"0" dec -> alpha');
console.log(convert("27", dec, allow), 'bb', '"27" dec -> alpha_lower');
console.log(convert("hello", allow, hex), '320048', '"hello" alpha_lower -> hex');
console.log(convert("SAME", alup, alup), 'SAME', '"SAME" alpha_upper -> alpha_upper');
