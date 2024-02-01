// https://leetcode.com/problems/two-sum
// Runtime: 344 ms, faster than 5.06% of JavaScript online submissions for Two Sum.
// Memory Usage: 35.6 MB, less than 18.60% of JavaScript online submissions for Two Sum.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsLen = nums.length;
    
    for (let i = 0; i < numsLen; i++) {
        const val = target - nums[nums.indexOf(parseInt(target) - parseInt(nums[i]))];
        
        for (let j = 0; j < numsLen; j++) {
            if (i !== j) {
                if (val + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }
    
};