// https://leetcode.com/problems/longest-common-prefix/
// Runtime: 56 ms, faster than 80.28% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 35.8 MB, less than 18.75% of JavaScript online submissions for Longest Common Prefix.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (prefix.length === 0) continue;
        const str = strs[i];
        for (let j = 0; j < prefix.length; j++) {
            if (str[j] === undefined || prefix[j] !== str[j]) {
                prefix = prefix.slice(0, j);
                continue;
            }
        }
    }
    return prefix;
};

const assert = require('assert');
assert.equal(longestCommonPrefix(["flower","flow","flight"]), "fl");
assert.equal(longestCommonPrefix(["dog","racecar","car"]), "");
assert.equal(longestCommonPrefix([]), "");
assert.equal(longestCommonPrefix(["aa", "a"]), "a");