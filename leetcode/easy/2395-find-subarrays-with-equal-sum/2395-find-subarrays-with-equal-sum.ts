/*
2395-find-subarrays-with-equal-sum
leetcode/easy/2395. Find Subarrays With Equal Sum
URL: https://leetcode.com/problems/find-subarrays-with-equal-sum/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function findSubarrays(nums: number[]): boolean {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length - 1; i += 1) {
    const key = nums[i] + nums[i + 1];
    if (!map.has(key)) {
      map.set(key, 0);
    }
    map.set(key, map.get(key) + 1);
  }

  return Array.from(map.values())
    .sort((a, b) => b - a)
    .some((val) => val > 1);
}

let nums = [4, 2, 4];
console.log(findSubarrays(nums));
// Output: true
// Explanation: The subarrays with elements [4,2] and [2,4] have the same sum of 6.
// Example 2:

nums = [1, 2, 3, 4, 5];
console.log(findSubarrays(nums));
// Output: false
// Explanation: No two subarrays of size 2 have the same sum.
//   Example 3:

nums = [0, 0, 0];
console.log(findSubarrays(nums));
// Output: true
// Explanation: The subarrays [nums[0],nums[1]] and [nums[1],nums[2]] have the same sum of 0.
