// https://leetcode.com/problems/majority-element/
// Runtime: 68 ms, faster than 51.15% of JavaScript online submissions for Majority Element.
// Memory Usage: 37.7 MB, less than 50.00% of JavaScript online submissions for Majority Element.
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let countMap = new Map();
    let numsLen = nums.length;
    let numsHalfLen=Math.ceil(numsLen/2);
    let value; 
    let key;

    for(let i=0; i<numsLen; i++){
        key = nums[i];
        if(countMap.has(key)){
            value = countMap.get(key)+1;
            countMap.set(key, value);
        }else{
            value = 1;
            countMap.set(key, 1);
        }

        if(value>=numsHalfLen){
            return key;
        }
    }
};