/*
largest-pair-sum-in-array

# codewars/7kyu/Largest pair sum in array
Difficulty: 7kyu
URL: https://www.codewars.com/kata/556196a6091a7e7f58000018/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function largestPairSum(numbers) {
  numbers.sort((a, b) => a - b);
  
  return numbers.slice(-2).reduce((acc, cur) => acc + cur, 0);
}

test("Testing for fixed tests", () => {
  expect(largestPairSum([10, 14, 2, 23, 19])).toEqual(42);
  expect(largestPairSum([-100, -29, -24, -19, 19])).toEqual(0);
  expect(largestPairSum([1, 2, 3, 4, 6, -1, 2])).toEqual(10);
  expect(largestPairSum([-10, -8, -16, -18, -19])).toEqual(-18);
});
