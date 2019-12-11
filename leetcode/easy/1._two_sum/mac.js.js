// https://leetcode.com/problems/two-sum
// Runtime: 320 ms, faster than 5.09% of JavaScript online submissions for Two Sum.
// Memory Usage: 35.4 MB, less than 21.90% of JavaScript online submissions for Two Sum.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for (var i = 0; i < nums.length; i++) {
        var val = target - nums[nums.indexOf(parseInt(target) - parseInt(nums[i]))];
        
        for (var j = 0; j < nums.length; j++) {
            if (i != j) {
                if (val + nums[j] == target) {
                    return [i, j];
                }
            }
        }
    }
    
};