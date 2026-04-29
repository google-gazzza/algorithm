// [JS][7kyu] Sort an array by value and index
// sort-an-array-by-value-and-index
// https://www.codewars.com/kata/58e0cb3634a3027180000040

const sortByValueAndIndex = (array) =>
  array
    .map((num, index) => ({ num, value: num * (index + 1) }))
    .sort((a, b) => a.value - b.value)
    .map((obj) => obj.num)

sortByValueAndIndex([23, 2, 3, 4, 5])
