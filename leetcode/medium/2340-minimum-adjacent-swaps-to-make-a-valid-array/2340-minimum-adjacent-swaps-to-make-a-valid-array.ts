/*
leetcode/medium/2340. Minimum Adjacent Swaps to Make a Valid Array
2340-minimum-adjacent-swaps-to-make-a-valid-array
uRL: https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function minimumSwaps(nums: number[]): number {
  if (nums.length === 1) {
    return 0;
  }

  let minimum = Infinity;
  let minimumIndex = 0;
  let maximum = -Infinity;
  let maximumIndex = 0;

  nums.forEach((num, index) => {
    if (num >= maximum) {
      maximum = num;
      maximumIndex = index;
    }
    if (num < minimum) {
      minimum = num;
      minimumIndex = index;
    }
  });

  if (minimumIndex < maximumIndex) {
    return minimumIndex + (nums.length - maximumIndex - 1);
  }

  return minimumIndex + (nums.length - maximumIndex - 2);
}

let nums = [3, 4, 5, 5, 3, 1];
console.log(minimumSwaps(nums));
// Output: 6

nums = [9];
console.log(minimumSwaps(nums));
// Output: 0

nums = [1, 9];
console.log(minimumSwaps(nums));
