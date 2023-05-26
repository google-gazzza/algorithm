// sort-the-gift-code
// Sort the Gift Code
// difficulty: 7kyu
// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/

const sortGiftCode = (code) => [...code].sort().join('');


console.log(sortGiftCode('abcdef'), 'abcdef');
console.log(sortGiftCode('pqksuvy'), 'kpqsuvy');
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');
