// simple-frequency-sort
// Simple frequency sort
// difficulty: 6kyu
// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

const solve = (arr) => Object.entries(arr.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {}))
  .sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[1] === b[1]) {
      return Number(a[0]) - Number(b[0]);
    }
  })
  .reduce((acc, cur) => {
    while (cur[1]) {
      acc = acc.concat(Number(cur[0]));
      cur[1] -= 1;
    }
    return acc;
  }, []);


console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]), [3, 3, 3, 5, 5, 7, 7, 2, 9]);
console.log(solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]), [1, 1, 1, 0, 0, 6, 6, 8, 8, 2, 3, 5, 9]);
console.log(solve([5, 9, 6, 9, 6, 5, 9, 9, 4, 4]), [9, 9, 9, 9, 4, 4, 5, 5, 6, 6]);
console.log(solve([4, 4, 2, 5, 1, 1, 3, 3, 2, 8]), [1, 1, 2, 2, 3, 3, 4, 4, 5, 8]);
console.log(solve([4, 9, 5, 0, 7, 3, 8, 4, 9, 0]), [0, 0, 4, 4, 9, 9, 3, 5, 7, 8]);
