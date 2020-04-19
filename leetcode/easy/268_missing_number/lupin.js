//https://leetcode.com/problems/missing-number/
// Runtime: 72 ms, faster than 38.28% of JavaScript online submissions for Missing Number.
// Memory Usage: 38.6 MB, less than 5.72% of JavaScript online submissions for Missing Number.
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const setNums = new Set(nums);
    for(let i=0; i<=nums.length; i++){
        if(setNums.has(i)===false){
            return i;
        }
    }
};