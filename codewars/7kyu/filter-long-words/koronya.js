// [JS][7kyu] Filter Long Words
// filter-long-words
// https://www.codewars.com/kata/5697fb83f41965761f000052/train/javascript

const filterLongWords = (sentence, n) => sentence.split(' ').filter((item) => item.length > n)

filterLongWords('The quick brown fox jumps over the lazy dog', 4)
