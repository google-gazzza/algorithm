// [JS][7kyu] Sort the Gift Code
// sort-the-gift-code
// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/javascript

const sortGiftCode = (code) => code.split('').sort().join('')

sortGiftCode('abcdef') === 'abcdef'
sortGiftCode('pqksuvy') === 'kpqsuvy'
sortGiftCode('zyxwvutsrqponmlkjihgfedcba') === 'abcdefghijklmnopqrstuvwxyz'
