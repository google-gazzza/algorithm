// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

const minSum = (input) => input.sort((a, b) => a - b)
  .reduce((acc, cur, i, arr) => (acc + (cur * arr.pop())), 0);


console.log(minSum([5, 4, 2, 3]), 22);
console.log(minSum([12, 6, 10, 26, 3, 24]), 342);
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);
