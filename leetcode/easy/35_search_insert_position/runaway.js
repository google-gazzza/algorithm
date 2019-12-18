// https://leetcode.com/problems/search-insert-position/
// Runtime: 52 ms, faster than 81.62% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 33.8 MB, less than 62.50% of JavaScript online submissions for Search Insert Position.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let half = Math.floor((end - start) / 2) + start;

        if (target === nums[half]) { 
            return half;
        } else if (target < nums[half]) {
            end = half - 1;
        } else {
            start = half + 1;
        }
    }

    return Math.max(start, end);
};

const assert = require('assert');
assert.equal(searchInsert([1,3,5,6], 5), 2);
assert.equal(searchInsert([1,3,5,6], 2), 1);
assert.equal(searchInsert([1,3,5,6], 7), 4);
assert.equal(searchInsert([1,3,5,6], 0), 0);