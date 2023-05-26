// https://leetcode.com/problems/longest-common-prefix/
// Runtime: 52 ms, faster than 91.82% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 34.8 MB, less than 62.50% of JavaScript online submissions for Longest Common Prefix.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || !strs.length) return "";
    let longestPrefix = "";
    // get longest string's length
    let len = Number.MAX_SAFE_INTEGER;
    for (let str of strs) {
        if (len > str.length)
            len = str.length;
    }
    for (let i = 0; i < len; i++) {
        let c = strs[0][i];
        if (strs.every((str) => str[i] === c))
            longestPrefix += c;
        else
            return longestPrefix;
    }
    return longestPrefix;
};