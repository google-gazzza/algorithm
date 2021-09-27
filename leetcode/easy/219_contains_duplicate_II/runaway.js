// https://leetcode.com/problems/contains-duplicate-ii/
// Runtime: 60 ms, faster than 92.03% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 40.2 MB, less than 57.89% of JavaScript online submissions for Contains Duplicate II.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if (map.has(value) && i - map.get(value) <= k)
            return true;
        map.set(value, i);
    }
    return false;
};