// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
// Runtime: 88 ms, faster than 77.12% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 39.9 MB, less than 73.45% of JavaScript online submissions for Longest Substring Without Repeating Characters.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let left = 0;
    return s.split('').reduce((sum, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(sum, i-left +1)
    }, 0);
};