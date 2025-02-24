// [JS][7kyu] Flatten and sort an array
// flatten-and-sort-an-array
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

const flattenAndSort = (array) => array.reduce((acc, cur) => [...acc, ...cur], []).sort((a, b) => a - b)

flattenAndSort([])
flattenAndSort([[], []])
flattenAndSort([[], [1]])
flattenAndSort([
  [3, 2, 1],
  [7, 9, 8],
  [6, 4, 5],
])
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])
