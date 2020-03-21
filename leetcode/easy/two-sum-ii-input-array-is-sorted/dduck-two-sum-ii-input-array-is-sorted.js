// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Runtime: 48 ms, faster than 98.15% of JavaScript online submissions
// Memory Usage: 38.4 MB, less than 8.70% of JavaScript online submissions
// Runtime: 56 ms, faster than 78.76% of JavaScript online submissions
// Memory Usage: 38.5 MB, less than 8.70% of JavaScript online submissions

const twoSum = (numbers, target, leftIndex = 0, rightIndex = numbers.length - 1) => {
  const sum = numbers[leftIndex] + numbers[rightIndex];
  if (sum === target) {
    return [leftIndex + 1, rightIndex + 1];
  }
  if (sum > target) {
    rightIndex -= 1;
  } else {
    leftIndex += 1;
  }
  return twoSum(numbers, target, leftIndex, rightIndex);
};

const numbers = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(numbers, target), [1, 2]);
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
