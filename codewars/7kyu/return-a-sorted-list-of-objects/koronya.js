// [JS][7kyu] Return a sorted list of objects
// return-a-sorted-list-of-objects
// https://www.codewars.com/kata/52705ed65de62b733f000064/train/javascript

const sortList = (sortBy, list) => list.sort((a, b) => b[sortBy] - a[sortBy])

sortList('a', [
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 4, b: 12 },
])
