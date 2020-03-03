// https://leetcode.com/problems/contains-duplicate-ii/
// Runtime: 64 ms, faster than 87.81% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 39.9 MB, less than 68.42% of JavaScript online submissions for Contains Duplicate II.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const len = nums.length;
    let map = new Map();
    let iVal;
    
    for(let i=0; i<len; i++){
        iVal = nums[i];
        if(map.has(iVal)){
            if(i-map.get(iVal)<=k){
                return true;
            }
        }
        map.set(iVal,i);
    }
    return false;
};