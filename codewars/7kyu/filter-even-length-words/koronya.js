// [JS][7kyu] filterEvenLengthWords
// filter-even-length-words
// https://www.codewars.com/kata/59564f3bcc15b5591a00004a/train/javascript

const filterEvenLengthWords = (words) => words.filter((word) => word.length % 2 === 0)

filterEvenLengthWords(['One', 'Two', 'Three', 'Four'])
