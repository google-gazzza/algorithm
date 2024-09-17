// https://leetcode.com/problems/first-unique-character-in-a-string/submissions/
// Runtime: 56 ms, faster than 99.86% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 37.5 MB, less than 97.50% of JavaScript online submissions for First Unique Character in a String.
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (!s || !s.length) return -1;
    let arr = Array(26).fill(-1);
    
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i) - 97;
        arr[code] = arr[code] === -1 ? i : -2;
    }
    const filtered = arr.filter( v => v >= 0)
    return filtered.length ? Math.min(...filtered) : -1;
};