/*
2248-intersection-of-multiple-arrays
leetcode/easy/2248. Intersection of Multiple Arrays
URL: https://leetcode.com/problems/intersection-of-multiple-arrays/

NOTE: Description

NOTE: Constraints
  - 1 <= nums.length <= 1000
  - 1 <= sum(nums[i].length) <= 1000
  - 1 <= nums[i][j] <= 1000
  - All the values of nums[i] are unique.

NOTE: Explanation
*/

function intersection(nums: number[][]): number[] {
  return nums.reduce((acc, curr) => {
    return acc.filter((x) => curr.includes(x));
  }).sort((a, b) => a - b);
}

let nums = [[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]];
console.log(intersection(nums));
// Output: [3,4]

nums = [[1, 2, 3], [4, 5, 6]];
console.log(intersection(nums));
// Output: []
