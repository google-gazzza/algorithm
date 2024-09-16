// 3131-find-the-integer-added-to-array-i
// URL: https://leetcode.com/problems/find-the-integer-added-to-array-i/description/

function addedInteger(nums1: number[], nums2: number[]): number {
    return Math.min(...nums2) - Math.min(...nums1);
  };
  