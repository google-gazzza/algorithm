// https://leetcode.com/problems/search-insert-position/
// Runtime: 52 ms, faster than 83.30% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 34.6 MB, less than 37.50% of JavaScript online submissions for Search Insert Position.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let numsLen=nums.length;
    for(let i=0; i<numsLen; i++){
        if(nums[i]===target || nums[i]>target){
            return i;
        }
    }
    return numsLen;
};