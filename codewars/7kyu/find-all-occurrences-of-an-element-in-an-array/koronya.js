// [JS][7kyu] Find all occurrences of an element in an array
// find-all-occurrences-of-an-element-in-an-array
// https://www.codewars.com/kata/59a9919107157a45220000e1/train/javascript

const findAll = (array, n) => {
  return array
    .map((item, index) => [item, index])
    .filter((item) => item[0] === n)
    .map((item) => item[1])
}

findAll([6, 9, 3, 4, 3, 82, 11], 3)
findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16)
findAll([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20)
