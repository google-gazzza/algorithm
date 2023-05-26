// https://leetcode.com/problems/climbing-stairs/submissions/
// Runtime: 48 ms, faster than 88.81% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 34 MB, less than 12.00% of JavaScript online submissions for Climbing Stairs.
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = [1,2];

    for (let i = 2; i < n; i++) {
        a[i] = a[i-1] + a[i-2];
    }
    return a[n-1];
};