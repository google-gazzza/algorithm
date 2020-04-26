// https://leetcode.com/problems/longest-palindromic-substring/
// Runtime: 80 ms, faster than 79.51% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 35.5 MB, less than 86.96% of JavaScript online submissions for Longest Palindromic Substring.

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length < 1)
        return "";
    
    let [left, right] = [0, 0];
    
    for (let i = 0; i < s.length; i++) {
        const len1 = palindromLength(s, i, i);
        const len2 = palindromLength(s, i, i+1);
        const max = Math.max(len1, len2);
        if (max > right - left + 1) {
            left = i - Math.round(max / 2) + 1;
            right = i + Math.floor(max / 2);
        }
    }
    
    return s.substring(left, right + 1);
};

function palindromLength(s, i, j) {
    let len = 0;
    while (i >= 0 && j < s.length && s[i] === s[j]) {
        len = j - i + 1;
        i -= 1;
        j += 1;
    }
    return len;
}