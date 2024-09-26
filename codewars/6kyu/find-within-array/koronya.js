// [JS][6kyu] Find within array
// find-within-array
// https://www.codewars.com/kata/51f082ba7297b8f07f000001/train/javascript

const findInArray = (array, iterator) => array.findIndex(iterator)

const trueIfEven = function (v, i) {
  return v % 2 === 0
}
const neverTrue = function (v, i) {
  return false
}
const trueIfValueEqualsIndex = function (v, i) {
  return v === i
}
const trueIfLengthEqualsIndex = function (v, i) {
  return v.length === i
}

findInArray([], trueIfEven) === -1
findInArray([1, 3, 5, 6, 7], trueIfEven) === 3
findInArray([2, 4, 6, 8], trueIfEven) === 0
findInArray([2, 4, 6, 8], neverTrue) === -1
findInArray([13, 5, 3, 1, 4, 5], trueIfValueEqualsIndex) === 4
findInArray(['one', 'two', 'three', 'four', 'five', 'six'], trueIfLengthEqualsIndex) === 4
findInArray(['bc', 'af', 'd', 'e'], trueIfLengthEqualsIndex) === -1
