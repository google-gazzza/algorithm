/*
1984-minimum-difference-between-highest-and-lowest-of-k-scores
leetcode/easy/1984. Minimum Difference Between Highest and Lowest of K Scores
URL: https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function minimumDifference(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let min = Infinity;

  for (let i = 0; i < nums.length - k + 1; i += 1) {
    const diff = nums[i + k - 1] - nums[i];

    if (diff < min) {
      min = diff;
    }
  }

  return min;
}

let nums = [90];
let k = 1;
console.log(minimumDifference(nums, k));
// Output: 0

nums = [9, 4, 1, 7];
k = 2;
console.log(minimumDifference(nums, k));
// Output: 2
