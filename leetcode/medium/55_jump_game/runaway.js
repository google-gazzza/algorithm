// https://leetcode.com/problems/jump-game/
// Runtime: 44 ms, faster than 99.53% of JavaScript online submissions for Jump Game.
// Memory Usage: 35.9 MB, less than 20.00% of JavaScript online submissions for Jump Game.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0;
    let idx = 0;
    while (idx <= max) {
        max = Math.max(max, idx + nums[idx]);
        if (max >= nums.length - 1)
            return true;
        idx += 1;
    }
    return false;
};