/*
2200-find-all-k-distant-indices-in-an-array
leetcode/easy/2200. Find All K-Distant Indices in an Array
URL: https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const result: Set<number> = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (Math.abs(i - j) <= k && nums[j] === key) {
        result.add(i);
      }
    }
  }

  return Array.from(result)
    .sort((a, b) => a - b);
}

let nums = [3, 4, 9, 1, 3, 9, 5];
let key = 9;
let k = 1;

console.log(findKDistantIndices(nums, key, k));
// Output: [1,2,3,4,5,6]

nums = [2, 2, 2, 2, 2];
key = 2;
k = 2;

console.log(findKDistantIndices(nums, key, k));
// Output: [0,1,2,3,4]
