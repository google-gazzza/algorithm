/*
81-search-in-rotated-sorted-array-ii

# leetcode/medium/81. Search in Rotated Sorted Array II
Difficulty: medium
URL: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

## Approach

### en

### kr

## Solution
### JavaScript

*/

const search = (nums, target) => {
  return nums.indexOf(target) !== -1;
};

// test
console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true

console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false
