// https://leetcode.com/problems/valid-anagram/submissions/
// Runtime: 64 ms, faster than 89.84% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 36 MB, less than 77.55% of JavaScript online submissions for Valid Anagram.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (!s && t || !t && s) return false;
    if (!s && !t) return true;
    
    if (s.length !== t.length) return false;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        const ch_s = s.charAt(i);
        const ch_t = t.charAt(i);
        map[ch_s] = !map[ch_s] ? 1: (map[ch_s] +1)
        map[ch_t] = !map[ch_t] ? -1: (map[ch_t] -1)
    }
    for (let i in map)
        if (map[i] !== 0) return false;
    return true;
};