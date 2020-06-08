/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
//Runtime: 92 ms, faster than 68.20% of JavaScript online submissions for Shuffle the Array.
//Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions for Shuffle the Array.
var shuffle = function(nums, n) {
    let result = [];
    for(let i=0;i<nums.length;i++){
        result.push(nums[i%2 === 0 ? i/2 : (Math.trunc((i/2))+n)]);
    }
    return result;
};
