/*
leetcode/medium/2294. Partition Array Such That Maximum Difference Is K
2294-partition-array-such-that-maximum-difference-is-k
uRL: https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function partitionArray(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);

  let min = Infinity;
  let max = -Infinity;
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > max) {
      max = nums[i];
    }

    if (nums[i] < min) {
      min = nums[i];
    }

    if (max - min > k) {
      count += 1;
      min = nums[i];
      max = nums[i];
    }
  }

  return count + 1;
}

let nums = [3, 6, 1, 2, 5];
let k = 2;
console.log(partitionArray(nums, k));
// Output: 2

nums = [1, 2, 3];
k = 1;
console.log(partitionArray(nums, k));
// Output: 2

nums = [2, 2, 4, 5];
k = 0;
console.log(partitionArray(nums, k));
// Output: 3
