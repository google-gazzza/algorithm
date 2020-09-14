// grasshopper-array-mean
// Grasshopper - Array Mean
// difficulty: 8kyu
// codewars.com/kata/55d277882e139d0b6000005d

const findAverage = (nums) => nums.reduce((a, c) => a + c) / nums.length;


console.log(findAverage([1]), 1);
console.log(findAverage([1, 3, 5, 7]), 4);
