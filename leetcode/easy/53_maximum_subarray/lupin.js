// https://leetcode.com/problems/maximum-subarray/
// Runtime: 56 ms, faster than 82.75% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 36 MB, less than 9.26% of JavaScript online submissions for Maximum Subarray.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let resultArray = [nums[0]];
    let preResult = nums[0];
    for(i=1; i<nums.length; i++){
        resultArray.push(Math.max(nums[i], preResult+nums[i]));
        preResult = resultArray[i];
    }
    return Math.max(...resultArray)
};