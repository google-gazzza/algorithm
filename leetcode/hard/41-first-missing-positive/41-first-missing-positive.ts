// leetcode/hard/41. First Missing Positive
// 41-first-missing-positive
// URL: https://leetcode.com/problems/first-missing-positive/

function firstMissingPositive(nums: number[]): number {
  const set = new Set(nums);

  for (let i = 1; i <= nums.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  return 1;
}

let nums = [1, 2, 0];
console.log(firstMissingPositive(nums));
// Output: 3

nums = [3, 4, -1, 1];
console.log(firstMissingPositive(nums));
// Output: 2

nums = [7, 8, 9, 11, 12];
console.log(firstMissingPositive(nums));
// Output: 1
