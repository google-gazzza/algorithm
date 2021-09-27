// https://leetcode.com/problems/move-zeroes/
// Runtime: 56 ms, faster than 96.40% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 36 MB, less than 23.40% of JavaScript online submissions for Move Zeroes.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    let zeroPoint;
    let lenNums = nums.length;
    for(let i=0; i<lenNums; i++){
        if(nums[i]===0){
            if(zeroPoint===undefined){
                zeroPoint=i;
            }
        }else{
            if(zeroPoint!=undefined){
                nums[zeroPoint]=nums[i];
                nums[i]=0;
                zeroPoint++;
            }
        }
    }

    return nums;
};