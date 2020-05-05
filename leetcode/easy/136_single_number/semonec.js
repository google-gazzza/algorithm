// https://leetcode.com/problems/single-number/submissions/
// Runtime: 48 ms, faster than 98.44% of JavaScript online submissions for Single Number.
// Memory Usage: 36.9 MB, less than 50.00% of JavaScript online submissions for Single Number.
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let a = 0;
    for (const i of nums) 
        a ^= i;
    return a;
};