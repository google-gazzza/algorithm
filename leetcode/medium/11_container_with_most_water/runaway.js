// https://leetcode.com/problems/container-with-most-water/
// Runtime: 56 ms, faster than 85.38% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 35.4 MB, less than 90.91% of JavaScript online submissions for Container With Most Water.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [max, l, r] = [0, 0, height.length - 1];
    while (r - l > 0) {
        max = Math.max(max, (r - l) * Math.min(height[r], height[l]));
        if (height[r] > height[l])
            l++;
        else
            r--;
    }
    return max;
};