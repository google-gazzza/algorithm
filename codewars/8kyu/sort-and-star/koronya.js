// [JS][8kyu] Sort and Star
// sort-and-star
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

const twoSort = (s) => {
  return s
    .sort((a, b) => (a < b ? -1 : 1))[0]
    .split('')
    .join('***')
}

twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps']) === 'b***i***t***c***o***i***n'
twoSort(['turns', 'out', 'random', 'test', 'cases', 'are', 'easier', 'than', 'writing', 'out', 'basic', 'ones']) === 'a***r***e'
