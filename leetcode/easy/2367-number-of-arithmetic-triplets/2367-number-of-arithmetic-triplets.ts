/*
2367-number-of-arithmetic-triplets
leetcode/easy/2367. Number of Arithmetic Triplets
URL: https://leetcode.com/problems/number-of-arithmetic-triplets/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function arithmeticTriplets(nums: number[], diff: number): number {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i += 1) {
    for (let j = i; j < nums.length - 1; j += 1) {
      for (let k = j; k < nums.length; k += 1) {
        if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
          count += 1;
        }
      }
    }
  }

  return count;
}

let nums = [0, 1, 4, 6, 7, 10];
let diff = 3;
console.log(arithmeticTriplets(nums, diff));
// Output: 2
// Explanation:
//   (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3.
// Example 2:
//
nums = [4, 5, 6, 7, 8, 9];
diff = 2;
console.log(arithmeticTriplets(nums, diff));
// Output: 2

// Explanation:
//   (0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
// (1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.
