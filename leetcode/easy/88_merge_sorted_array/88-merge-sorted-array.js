/*
88-merge-sorted-array

# leetcode/easy/88. Merge Sorted Array
Difficulty: easy
URL: https://leetcode.com/problems/merge-sorted-array
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const merge = function (nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i += 1) {
    nums1.splice(i, 1, nums2.shift());
  }
  
  nums1.sort((a, b) => a - b);
};
