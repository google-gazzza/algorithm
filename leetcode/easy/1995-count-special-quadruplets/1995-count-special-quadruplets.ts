/*
1995-count-special-quadruplets
leetcode/easy/1995. Count Special Quadruplets
URL: https://leetcode.com/problems/count-special-quadruplets/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function countQuadruplets(nums: number[]): number {
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        for (let l = k + 1; l < nums.length; l += 1) {
          if (nums[i] + nums[j] + nums[k] === nums[l]) {
            count += 1;
          }
        }
      }
    }
  }

  return count;
}

// Example 1:
//
let nums = [1, 2, 3, 6];
console.log(countQuadruplets(nums));
// Output: 1
// Explanation: The only quadruplet that satisfies the requirement is (0, 1, 2, 3) because 1 + 2 + 3 == 6.
// Example 2:
//
nums = [3, 3, 6, 4, 5];
console.log(countQuadruplets(nums));
// Output: 0
// Explanation: There are no such quadruplets in [3,3,6,4,5].
//   Example 3:
//
nums = [1, 1, 1, 3, 5];
console.log(countQuadruplets(nums));
// Output: 4
// Explanation: The 4 quadruplets that satisfy the requirement are:
//   - (0, 1, 2, 3): 1 + 1 + 1 == 3
// - (0, 1, 3, 4): 1 + 1 + 3 == 5
// - (0, 2, 3, 4): 1 + 1 + 3 == 5
// - (1, 2, 3, 4): 1 + 1 + 3 == 5
