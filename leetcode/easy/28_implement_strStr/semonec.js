// https://leetcode.com/problems/implement-strstr/submissions/
// Runtime: 56 ms, faster than 67.66% of JavaScript online submissions for Implement strStr().
// Memory Usage: 36.1 MB, less than 7.14% of JavaScript online submissions for Implement strStr().
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle || !needle.length) return 0; // if needle is not exists, return 0;
    if (!haystack || haystack.length < needle.length) return -1; 
    // needle exists, but haystack is not exist or shorter than needle then, return -1
    
    for (let i = 0; i < haystack.length; i++) {
        if (needle[0] === haystack[i]) {
            if (needle === haystack.slice(i, i+ needle.length))
                return i;
        }
    }
    return -1;
};