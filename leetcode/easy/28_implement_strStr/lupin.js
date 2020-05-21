// https://leetcode.com/problems/implement-strstr/
// Runtime: 48 ms, faster than 95.55% of JavaScript online submissions for Implement strStr().
// Memory Usage: 33.9 MB, less than 75.00% of JavaScript online submissions for Implement strStr().
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};