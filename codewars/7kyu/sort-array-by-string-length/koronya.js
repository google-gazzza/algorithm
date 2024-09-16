// [JS][7kyu] Sort array by string length
// sort-array-by-string-length
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

const sortByLength = (array) => array.sort((a, b) => a.length - b.length)

sortByLength(['Telescopes', 'Glasses', 'Eyes', 'Monocles'])
