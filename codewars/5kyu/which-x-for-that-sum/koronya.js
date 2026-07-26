// [JS][5kyu] Which x for that sum?
// which-x-for-that-sum
// https://www.codewars.com/kata/5b1cd19fcd206af728000056/train/javascript

const solve = (m) => (2 * m + 1 - Math.sqrt(4 * m + 1)) / (2 * m)

solve(2)
solve(8)
