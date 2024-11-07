// [JS][6kyu] Sorting by bits
// sorting-by-bits
// https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript

const getScore = (n) =>
    n
      .toString(2)
      .split('')
      .filter((bit) => bit === '1').length
  
  const sortByBit = (arr) => arr.sort((a, b) => getScore(a) - getScore(b) || a - b)
  
  sortByBit([3, 8, 3, 6, 5, 7, 9, 1])
  sortByBit([7, 6, 15, 8])
  sortByBit([10, 12])
  