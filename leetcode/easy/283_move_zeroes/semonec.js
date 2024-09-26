// https://leetcode.com/problems/move-zeroes/submissions/
// Runtime: 56 ms, faster than 94.49% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 35.8 MB, less than 53.19% of JavaScript online submissions for Move Zeroes.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (!nums || nums.length <= 1) return nums;
    let pos = 0;
    
    for (let i = 0; i < nums.length; i++) { 
        if (nums[i] !== 0)
            nums[pos++] = nums[i]; 
    }
    while(pos < nums.length) {
        nums[pos++] = 0;
    }
};