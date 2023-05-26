// highest-rank-number-in-an-array
// Highest Rank Number in an Array
// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/highest-rank-number-in-an-array

// please don't be mad, it's just for fun.
// if it's for work I would never wrote like this.
// I very care about readability
const highestRank = (arr) => [...arr.reduce((acc, cur) => {
  acc.set(cur, (acc.get(cur) || 0) + 1);
  return acc;
}, new Map()).entries()]
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    }
    
    return b[0] - a[0];
  })[0][0];



var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log(highestRank(arr), 12);

