/*
1822-sign-of-the-product-of-an-array
leetcode/easy/1822. Sign of the Product of an Array
URL: https://leetcode.com/problems/sign-of-the-product-of-an-array/

NOTE: Description

NOTE: Constraints
  - 1 <= nums.length <= 1000
  - -100 <= nums[i] <= 100

NOTE: Explanation
*/

function arraySign(nums: number[]): number {
  if (nums.indexOf(0) !== -1) {
    return 0;
  }

  return Math.sign(nums.reduce((acc, curr) => acc * curr, 1));
}

// Example 1:
let nums = [-1, -2, -3, -4, 3, 2, 1];
console.log(arraySign(nums));
// Output: 1

// Explanation: The product of all values in the array is 144, and signFunc(144) = 1

nums = [1, 5, 0, 2, -3];
console.log(arraySign(nums));
// Output: 0
// Explanation: The product of all values in the array is 0, and signFunc(0) = 0
// Example 3:

nums = [-1, 1, -1, 1, -1];
console.log(arraySign(nums));
// Output: -1
// Explanation: The product of all values in the array is -1, and signFunc(-1) = -1
