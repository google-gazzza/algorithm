/*
33-search-in-rotated-sorted-array

# leetcode/medium/33. Search in Rotated Sorted Array
 Difficulty: medium
URL: https://leetcode.com/problems/search-in-rotated-sorted-array/

## Approach

### en

### kr

## Solution
### JavaScript

*/

const search = (nums, target) => {
  return nums.indexOf(target);
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

console.log(search([4,5,6,7,0,1,2], 3));
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

console.log(search([1], 0));
// Input: nums = [1], target = 0
// Output: -1
