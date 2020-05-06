// https://leetcode.com/problems/house-robber/submissions/
// Runtime: 52 ms, faster than 73.53% of JavaScript online submissions for House Robber.
// Memory Usage: 33.9 MB, less than 28.57% of JavaScript online submissions for House Robber.
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    return nums.reduce((p, n) => {
        return {
            prev: p.next, next: Math.max(p.prev + n, p.next)
        }
    }, {prev: 0, next: 0}).next;
 };