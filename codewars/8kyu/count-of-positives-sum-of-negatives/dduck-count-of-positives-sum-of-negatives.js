// count-of-positives-sum-of-negatives
// Count of positives / sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/count-of-positives-sum-of-negatives

const countPositivesSumNegatives = (input) => input && input.length ? input.reduce((acc, cur) => {
  if (cur > 0) {
    acc[0] += 1;
  } else {
    acc[1] += cur;
  }
  return acc;
}, [0, 0]) : [];



let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let actual = countPositivesSumNegatives(testData);
let expected = [10, -65];

console.log(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");

testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
actual = countPositivesSumNegatives(testData);
expected = [8, -50];

console.log(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");
