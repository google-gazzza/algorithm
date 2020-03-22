// https://leetcode.com/problems/implement-strstr/
// Runtime: 52 ms, faster than 90.40% of JavaScript online submissions for Implement strStr().
// Memory Usage: 34 MB, less than 67.86% of JavaScript online submissions for Implement strStr().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const main = {
        init : function(e, n) {
            return e.indexOf(n);
        }
    }
    
    return main.init(haystack, needle);
};