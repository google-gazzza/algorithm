// https://leetcode.com/problems/remove-element/
// Runtime: 56 ms, faster than 63.99% of JavaScript online submissions for Remove Element.
// Memory Usage: 33.9 MB, less than 44.44% of JavaScript online submissions for Remove Element.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            count++;
        } else {
            nums[i - count] = nums[i];
        }
    }
    return nums.length - count;
};

const assert = require('assert');

let arr = [3,2,2,3];
assert.equal(removeElement(arr, 3), 2);
assert.deepEqual(arr, [2,2,2,3]);

arr = [0,1,2,2,3,0,4,2];
assert.equal(removeElement(arr, 2), 5);
assert.deepEqual(arr, [0,1,3,0,4,0,4,2]);