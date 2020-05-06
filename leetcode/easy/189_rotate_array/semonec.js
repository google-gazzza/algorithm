// https://leetcode.com/problems/rotate-array/submissions/
// Runtime: 60 ms, faster than 92.18% of JavaScript online submissions for Rotate Array.
// Memory Usage: 35.1 MB, less than 94.74% of JavaScript online submissions for Rotate Array.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length - k));
    return nums;
};