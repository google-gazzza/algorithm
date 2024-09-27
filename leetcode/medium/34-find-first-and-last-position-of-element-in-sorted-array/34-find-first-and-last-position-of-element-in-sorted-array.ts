/*
34-find-first-and-last-position-of-element-in-sorted-array
leetcode/medium/34. Find First and Last Position of Element in Sorted Array
URL: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

NOTE: Description
NOTE: Constraints
  - 0 <= nums.length <= 105
  - -109 <= nums[i] <= 109
  - nums is a non-decreasing array.
  - -109 <= target <= 109

NOTE: Explanation
NOTE: Reference
*/

function searchRange(nums: number[], target: number): number[] {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
}

// Example 1:
let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target));
// Output: [3,4]
// Example 2:

nums = [5, 7, 7, 8, 8, 10];
target = 6;
console.log(searchRange(nums, target));
// Output: [-1,-1]
// Example 3:

nums = [];
target = 0;
console.log(searchRange(nums, target));

// Output: [-1,-1]