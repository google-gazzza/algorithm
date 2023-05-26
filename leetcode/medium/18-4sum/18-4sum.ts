/*
18-4sum
leetcode/medium/18. 4Sum
Difficulty: medium
URL: https://leetcode.com/problems/4sum/

NOTE: Description
  Given an array nums of n integers, return an array of all the unique quadruplets
  [nums[a], nums[b], nums[c], nums[d]] such that:
  0 <= a, b, c, d < n
  a, b, c, and d are distinct.
  nums[a] + nums[b] + nums[c] + nums[d] == target
  You may return the answer in any order.

NOTE: Constraints
  1 <= nums.length <= 200
  -109 <= nums[i] <= 109
  -109 <= target <= 109

NOTE: Explanation
*/

function convertToCsvString(...nums: number[]): string {
  return nums.map(String).join(',');
}

function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);

  const resultSet = new Set();

  for (let i = 0; i < nums.length - 3; i += 1) {
    for (let j = i + 1; j < nums.length - 2; j += 1) {
      for (let k = j + 1; k < nums.length - 1; k += 1) {
        const sum = nums[i] + nums[j] + nums[k];
        const newTarget = target - sum;

        if (nums.lastIndexOf(newTarget) > k) {
          resultSet.add(convertToCsvString(nums[i], nums[j], nums[k], newTarget));
        }
      }
    }
  }

  const result: number[][] = Array.from(resultSet)
    .map((e: any): number[] => e.split(',').map(Number));

  return result;
}

// Example 1:
//
let nums = [1, 0, -1, 0, -2, 2];
let target = 0;
// console.log(fourSum(nums, target));
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:
//
nums = [2, 2, 2, 2, 2];
target = 8;
// console.log(fourSum(nums, target));
// Output: [[2,2,2,2]]
//

nums = [-3, -2, -1, 0, 0, 1, 2, 3];
target = 0;
// console.log(fourSum(nums, target));
// Output
//   [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,0,0,2],[-1,0,0,1]]
// Expected
//   [[-3,-2,2,3],[-3,-1,1,3],[-3,0,0,3],[-3,0,1,2],[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

nums = [1, -2, -5, -4, -3, 3, 3, 5];
target = -11;
console.log(fourSum(nums, target));
// Output
//   []
// Expected
//   [[-5,-4,-3,1]]
