// https://leetcode.com/problems/search-insert-position/submissions/
// Runtime: 56 ms, faster than 63.48% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 34.7 MB, less than 31.25% of JavaScript online submissions for Search Insert Position.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const main = {
        init : function(e, l, t) {
            var near = e.reduce(function(prev, curr) {
                return (Math.abs(curr - t) < Math.abs(prev - t) ? curr : prev);
            });
            
            for (let i = 0; i < l; i++) {
                if (e[i] === near) {
                    if (e[i] === t) {
                        return i;
                    } else {
                        if (t < e[i]) return i;
                        else return i+1;
                    }
                }
            }
            
        }
    }
    
    return main.init(nums, nums.length, target);
};