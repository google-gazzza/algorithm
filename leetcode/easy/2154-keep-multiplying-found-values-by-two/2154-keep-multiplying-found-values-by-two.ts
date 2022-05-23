/*
2154-keep-multiplying-found-values-by-two
leetcode/easy/2154. Keep Multiplying Found Values by Two
URL: https://leetcode.com/problems/keep-multiplying-found-values-by-two/

NOTE: Description
NOTE: Constraints
  - 1 <= nums.length <= 1000
  - 1 <= nums[i], original <= 1000

NOTE: Explanation
NOTE: Reference
*/

function findFinalValue(nums: number[], original: number): number {
  return nums.sort((a, b) => a - b)
    .reduce((acc, curr) => {
      if (curr === acc) {
        return curr + acc;
      }
      return acc;
    }, original);
}

let nums = [5, 3, 6, 1, 12];
let original = 3;
console.log(findFinalValue(nums, original));
// Output: 24

nums = [2, 7, 9];
original = 4;
console.log(findFinalValue(nums, original));
// Output: 4
// Explanation:
//   - 4 is not found in nums. Thus, 4 is returned.
