// https://leetcode.com/problems/roman-to-integer/submissions/
// Runtime: 136 ms, faster than 86.15% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 39.9 MB, less than 46.81% of JavaScript online submissions for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let number = 0;
    const map = {
        I   :1,
        V   :5,
        X   :10,
        L   :50,
        C   :100,
        D   :500,  
        M   :1000
    }
    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        const next = s[i+1];
        if (next && map[curr] < map[next])
            number -= map[curr];
        else
            number += map[curr];
    }
    return number;
};