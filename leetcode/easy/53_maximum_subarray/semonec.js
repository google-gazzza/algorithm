// https://leetcode.com/problems/maximum-subarray/submissions/
// Runtime: 52 ms, faster than 94.32% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 36 MB, less than 9.26% of JavaScript online submissions for Maximum Subarray.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = 0;
    for (let n of nums) {
        currSum += n;
        maxSum = Math.max(maxSum, currSum);
        if (currSum < 0) {
            currSum = 0;
        }
    }
    return maxSum;
};