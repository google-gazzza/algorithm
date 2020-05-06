// https://leetcode.com/problems/contains-duplicate/submissions/
// Runtime: 56 ms, faster than 97.31% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 42.6 MB, less than 14.71% of JavaScript online submissions for Contains Duplicate.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (!nums || nums.length < 2) return false;
    let map = {};
    for (const v of nums) {
        if (map[v]) return true;
        map[v] = true;
    }
    return false;
};