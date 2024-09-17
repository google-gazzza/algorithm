// https://leetcode.com/problems/container-with-most-water/submissions/
// Runtime: 56 ms, faster than 85.10% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 35.5 MB, less than 66.67% of JavaScript online submissions for Container With Most Water.
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    // default. O(n^2)
    // for (let i = 0; i < height.length; i++) {
    //     for (let j = i + 1; j < height.length; j++) {
    //         max = Math.max(max, (j-i) * Math.min(height[i], height[j]) );
    //     }
    // }
    // return max;
    
    // advanced
    let l = 0, r = height.length -1;
    while (l < r) {
        max = Math.max(max, (r-l) * Math.min(height[l], height[r]) );
        height[l] < height[r] ? l++ : r--;
    }
    return max;
};