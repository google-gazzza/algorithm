// https://leetcode.com/problems/majority-element/
// Runtime: 68 ms, faster than 51.15% of JavaScript online submissions for Majority Element.
// Memory Usage: 37.5 MB, less than 57.14% of JavaScript online submissions for Majority Element.
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let countMap = new Map();
    let numsLen = nums.length;
    let numsHalfLen=Math.ceil(numsLen/2);
    let valueOfMap; 
    for(let i=0; i<numsLen; i++){
        if(countMap.has(nums[i])){
            valueOfMap = countMap.get(nums[i])+1;
            countMap.set(nums[i], valueOfMap);
        }else{
            valueOfMap = 1;
            countMap.set(nums[i], 1);
        }

        if(valueOfMap>=numsHalfLen){
            return nums[i];
        }
    }
};