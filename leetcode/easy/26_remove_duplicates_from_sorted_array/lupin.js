// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Runtime: 64 ms, faster than 94.69% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 36.5 MB, less than 100.00% of JavaScript online submissions for Remove Duplicates from Sorted Array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let lastNum;
    let len=0; 

    nums.forEach((value)=>{
        if(lastNum!=value){
            lastNum=value;
            nums[++len-1]=value;
        }
    })
    return len;
};