// simple-fun-136-missing-values
// Simple Fun #136: Missing Values
// https://www.codewars.com/kata/58a66c208b88b2de660000c3
// appreach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/simple-fun-136-missing-values

const missingValues = (arr) => {
  const set = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const sortedValue = Object.entries(set)
    .map((v) => [v[1], Number(v[0])])
    .sort((a, b) => a[0] - b[0]);
  
  return sortedValue[sortedValue.findIndex((v) => v[0] === 2)][1]
    * (sortedValue[sortedValue.findIndex((v) => v[0] === 1)][1] ** 2);
};


console.log(missingValues([1, 1, 1, 2, 2, 3]), 18);
console.log(missingValues([96, 56, 24, 46, 75, 46, 75, 21, 46, 21, 75, 96, 56, 96, 56]), 12096);
console.log(missingValues([27, 65, 44, 39, 44, 21, 21, 44, 65, 39, 21, 65]), 28431);
console.log(missingValues([66, 4, 80, 66, 4, 83, 97, 81, 19, 4, 80, 51, 83, 81, 83, 66, 51, 80, 97, 81, 97]), 18411);
console.log(missingValues([60, 76, 86, 76, 86, 53, 60, 88, 71, 71, 71, 86, 88, 76, 88, 17, 60, 26, 17, 17, 26, 53, 98, 53]), 249704);
console.log(missingValues([42, 23, 45, 33, 33, 19, 42, 79, 79, 23, 95, 95, 79, 19, 42, 33, 19, 23]), 192375);
console.log(missingValues([4, 74, 41, 41, 41, 88, 63, 35, 35, 4, 88, 13, 63, 74, 63, 88, 4, 74]), 5915);
