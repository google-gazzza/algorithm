/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//Runtime: 60 ms, faster than 85.37% of JavaScript online submissions for Move Zeroes.
//Memory Usage: 35.9 MB, less than 34.04% of JavaScript online submissions for Move Zeroes.
var moveZeroes = function(nums) {
    
    
    for(var i=nums.length-1;i>=0;i--){
        if(nums[i] === 0){
            nums.splice(i,1);
            nums.push(0);
        }
        
    }

