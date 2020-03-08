// https://leetcode.com/problems/two-sum
// Runtime: 88 ms, faster than 49.94% of JavaScript online submissions for Two Sum.
// Memory Usage: 34.7 MB, less than 58.68% of JavaScript online submissions for Two Sum.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    // target - x = y 
    for(var x=0; x<nums.length; x++){
        for( var y = x; y<nums.length; y++ ){
            if(target-nums[x] == nums[y]){
                return [x, y];
            } 
        }
    }
    return [-1,-1];
};
