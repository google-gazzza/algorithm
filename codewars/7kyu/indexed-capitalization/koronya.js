// [JS][7kyu] Indexed capitalization
// indexed-capitalization
// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

const capitalize = (s, arr) =>
  s
    .split('')
    .map((str, index) => (arr.includes(index) === true ? str.toUpperCase() : str))
    .join('')

capitalize('abcdef', [1, 2, 5])
capitalize('abcdef', [1, 2, 5, 100])
capitalize('codewars', [1, 3, 5, 50])
capitalize('abracadabra', [2, 6, 9, 10])
capitalize('codewarriors', [5])
capitalize('indexinglessons', [0])
