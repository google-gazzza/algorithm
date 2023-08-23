// [JS][6kyu] Number Zoo Patrol
// number-zoo-patrol
// https://www.codewars.com/kata/5276c18121e20900c0000235/train/javascript

const findNumber = (array) => {
  const n = array.length
  return ((n + 1) * (n + 2)) / 2 - array.reduce((acc, cur) => acc + cur, 0)
}

findNumber([1, 3, 4, 5, 6, 7, 8]) === 2
findNumber([7, 8, 1, 2, 4, 5, 6]) === 3
findNumber([1, 2, 3, 5]) === 4
findNumber([1, 3]) === 2
findNumber([2, 3, 4]) === 1
findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]) === 12
findNumber([1, 2, 3]) === 4
