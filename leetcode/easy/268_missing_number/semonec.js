// https://leetcode.com/problems/missing-number/submissions/
// Runtime: 60 ms, faster than 77.11% of JavaScript online submissions for Missing Number.
// Memory Usage: 36 MB, less than 82.86% of JavaScript online submissions for Missing Number.
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    return (nums.length * (nums.length+1) /2) - nums.reduce((p,n) => p+n)
};