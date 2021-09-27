// https://leetcode.com/problems/contains-duplicate/
// Runtime: 60 ms, faster than 92.53% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 41.2 MB, less than 58.82% of JavaScript online submissions for Contains Duplicate.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    let key;
    
    for(let i=0; i<nums.length; i++){
        key=nums[i];
        if(map.has(key)){
            return true;
        }else{
            map.set(key, true);
        }
    }
    return false;
};