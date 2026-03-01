// [JS][7kyu] Sum of a nested list
// sum-of-a-nested-list
// https://www.codewars.com/kata/5a15a4db06d5b6d33c000018/train/javascript

// const sumNested = (arr) => {
//   return arr.flat().reduce((acc, item) => acc + (Array.isArray(item) ? sumNested(item) : item), 0)
// }
const sumNested = (arr) => arr.flat(Infinity).reduce((acc, item) => acc + item, 0)

sumNested([1]) === 1
sumNested([1, 2, 3, 4]) === 10
sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 55

sumNested([]) === 0

sumNested([[1], []]) === 1
sumNested([[1, 2, 3, 4]]) === 10

sumNested([1, [1], [[1]], [[[1]]]]) === 4
sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]]) === 8

sumNested([[[[], [], [[[[[[[[[[]]]]]]]]]]], [], [], [[[], [[]]]]], []]) === 0
