/*
16-3sum-closest
leetcode/easy/16. 3Sum Closest
Difficulty: easy
URL: https://leetcode.com/problems/3sum-closest/

NOTE: Description
 Given an integer array nums of length n and an integer target,
 find three integers in nums such that the sum is closest to target.
 Return the sum of the three integers.
 You may assume that each input would have exactly one solution.

NOTE: Constraints
    3 <= nums.length <= 1000
    -1000 <= nums[i] <= 1000
    -104 <= target <= 104

NOTE: Explanation
  we will use two pointers to iterate through the array.
  which means will start from the beginning and end of the array.
  for that strategy, input data must be sorted.
  1. sorting
  2. iterate through the array
    first index 'i' use as pre condition.
  3. if array[i] + array[leftIndexx:rightIndex] is bigger than target,
    then decrease end index
    if array[i] + array[leftIndex,rightIndex] is smaller than target,
    then increase start index
  4. if array[i] + array[leftIndex,rightIndex] is equal to target,
    then return array[i] + array[leftIndex,rightIndex]
  5. if not, then compare most closest sum with target and update
*/

function sum(...args: number[]): number {
  return args.reduce((a, b) => a + b, 0);
}

// NOTE: n^2 solution
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);

  let closestValue = Number.MAX_SAFE_INTEGER * -1;

  for (let i = 0; i < nums.length - 2; i += 1) {
    let leftIndex: number = i + 1;
    let rightIndex: number = nums.length - 1;

    while (leftIndex < rightIndex) {
      const currentClosestValue = sum(nums[i], nums[leftIndex], nums[rightIndex]);

      if (currentClosestValue === target) {
        return currentClosestValue;
      }

      if (Math.abs(target - closestValue) > Math.abs(target - currentClosestValue)) {
        closestValue = currentClosestValue;
      }

      if (currentClosestValue < target) {
        leftIndex += 1;
      } else {
        rightIndex -= 1;
      }
    }
  }

  return closestValue;
}

// NOTE: n^3 solution
// function threeSumClosest(nums: number[], target: number): number {
//   nums.sort((a, b) => a - b);
//
//   let closestValue = Number.MAX_SAFE_INTEGER * -1;
//
//   for (let i = 0; i < nums.length - 2; i += 1) {
//     let currentClosestValue = sum(nums[i], nums[i + 1], nums[i + 2]);
//
//     for (let j = i + 1; j < nums.length - 1; j += 1) {
//       for (let k = j + 1; k < nums.length; k += 1) {
//         const closestValueCandidate = sum(nums[i], nums[j], nums[k]);
//
//         if (currentClosestValue === target) {
//           return currentClosestValue;
//         }
//
//         if (Math.abs(target - currentClosestValue) > Math.abs(target - closestValueCandidate)) {
//           currentClosestValue = closestValueCandidate;
//         }
//       }
//     }
//
//     if (Math.abs(target - closestValue) > Math.abs(target - currentClosestValue)) {
//       closestValue = currentClosestValue;
//     }
//   }
//
//   return closestValue;
// }


// Example 1:
//
let nums = [-1, 2, 1, -4];
let target = 1;
console.log(threeSumClosest(nums, target));
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
//   Example 2:
//
nums = [0, 0, 0];
target = 1;
console.log(threeSumClosest(nums, target));
// Output: 0

nums = [0, 2, 1, -3];
target = 1;
console.log(threeSumClosest(nums, target));
// output : 0

nums = [1, 2, 4, 8, 16, 32, 64, 128];
target = 82;
console.log(threeSumClosest(nums, target));
// expected 82

// Constraints:
//
//   3 <= nums.length <= 1000
//   -1000 <= nums[i] <= 1000
//   -104 <= target <= 104
