/*
2231-largest-number-after-digit-swaps-by-parity
leetcode/easy/2231. Largest Number After Digit Swaps by Parity
URL: https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function largestInteger(num: number): number {
  const numArr = num.toString().split('').map(Number);
  const sortedOddArr = [];
  const sortedEvenArr = [];
  const result = [];

  for (let i = 0; i < numArr.length; i += 1) {
    if (numArr[i] % 2 === 0) {
      sortedEvenArr.push(numArr[i]);
    } else {
      sortedOddArr.push(numArr[i]);
    }
  }
  sortedOddArr.sort((a, b) => b - a);
  sortedEvenArr.sort((a, b) => b - a);

  for (let i = 0; i < numArr.length; i += 1) {
    if (numArr[i] % 2 === 0) {
      result.push(sortedEvenArr.shift());
    } else {
      result.push(sortedOddArr.shift());
    }
  }

  return Number(result.join(''));
}

let num = 1234;
console.log(largestInteger(num));
// Output: 3412

num = 65875;
// Output: 87655
console.log(largestInteger(num));
