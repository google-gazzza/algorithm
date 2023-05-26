// https://leetcode.com/problems/merge-sorted-array/submissions/
// Runtime: 60 ms, faster than 37.69% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 33.8 MB, less than 76.92% of JavaScript online submissions for Merge Sorted Array.
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // fill largest number from the end
    let pos1 = m-1;
    let pos2 = n-1;
    let pos   = m+n-1;
    
    while (pos1 >= 0 && pos2 >= 0) {
        if (nums1[pos1] > nums2[pos2])
            nums1[pos--] = nums1[pos1--];
        else
            nums1[pos--] = nums2[pos2--];
    }
    while (pos2 >= 0)
        nums1[pos--] = nums2[pos2--];
    return nums1;
};