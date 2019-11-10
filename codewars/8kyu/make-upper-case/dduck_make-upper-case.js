// https://www.codewars.com/kata/makeuppercase/

const makeUpperCase = (str) => str.split('')
  .map((char) => {
    const charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= (97 + 32)) {
      return String.fromCharCode(charCode - 32);
    }
    return char;
  }).join('');

console.log(makeUpperCase('trset'));
