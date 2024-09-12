// [JS][7kyu] Largest pair sum in array
// largest-pair-sum-in-array
// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

const largestPairSum = (numbers) => {
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
};

largestPairSum([10, 14, 2, 23, 19]);
