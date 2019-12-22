// https://leetcode.com/problems/remove-duplicates-from-sorted-array/


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let lastNum;
    let len=0; 

    nums.forEach((value, index)=>{
        if(lastNum!=value){
            lastNum=value;
            nums[++len-1]=value;
        }
    })
    return len;
};

let nums = [1,1,2];
let len = removeDuplicates(nums);


// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
// for (let i = 0; i < len; i++) {
//     console.log(nums[i]);
// }