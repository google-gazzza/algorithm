// https://leetcode.com/problems/single-number/
// Runtime: 60 ms, faster than 73.07% of JavaScript online submissions for Single Number.
// Memory Usage: 35.3 MB, less than 90.38% of JavaScript online submissions for Single Number.
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((prev, curr)=>{
        return prev^curr;
    })
};
