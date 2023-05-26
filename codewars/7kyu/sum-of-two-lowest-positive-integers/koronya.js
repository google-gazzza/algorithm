// [JS][7kyu] Sum of two lowest positive integers
// sum-of-two-lowest-positive-integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

const sumTwoSmallestNumbers = (numbers) => {
  const [first, second] = numbers.sort((a, b) => a - b);
  return first + second;
};

sumTwoSmallestNumbers([5, 8, 12, 19, 22]) === 13;
sumTwoSmallestNumbers([15, 28, 4, 2, 43]) === 6;
sumTwoSmallestNumbers([3, 87, 45, 12, 7]) === 10;
sumTwoSmallestNumbers([23, 71, 33, 82, 1]) === 24;
sumTwoSmallestNumbers([52, 76, 14, 12, 4]) === 16;
