// https://leetcode.com/problems/remove-element/
// Runtime: 40 ms, faster than 99.88% of JavaScript online submissions for Remove Element.
// Memory Usage: 33.8 MB, less than 50.00% of JavaScript online submissions for Remove Element.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let resultLen=nums.length;
    for(let i=resultLen-1; i>=0; i--){
        if(val===nums[i]){
            nums[i]=nums[resultLen-1];
            resultLen--;
        }
    }

    return resultLen;
};
