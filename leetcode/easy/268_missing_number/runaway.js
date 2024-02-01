// https://leetcode.com/problems/missing-number/
// Runtime: 72 ms, faster than 30.80% of JavaScript online submissions for Missing Number.
// Memory Usage: 38.8 MB, less than 5.72% of JavaScript online submissions for Missing Number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const set = new Set(nums);
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num !== 0 && !set.has(num - 1))
            return num - 1;
        max = Math.max(max, num);
    }
    return max + 1;
};