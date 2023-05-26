// https://leetcode.com/problems/string-to-integer-atoi/submissions/
// Runtime: 76 ms, faster than 71.16% of JavaScript online submissions for String to Integer (atoi).
// Memory Usage: 36.6 MB, less than 42.86% of JavaScript online submissions for String to Integer (atoi).
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const conv = [];
    
    for (let i = 0; i < str.length; i++) {
        if ((str[i] === '-' || str[i] === '+') || (str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57))
            conv.push(str[i]);
        else if (str[i] === ' ' && !conv.length) continue;
        else break;
    }
    if (!conv.length) return 0;
    
    const parsed = parseInt(conv.join(''));
    const INT_MIN = Math.pow(2, 31) *-1; 
    if (parsed < INT_MIN) return INT_MIN;
    const INT_MAX = Math.pow(2, 31) -1; 
    if (parsed > INT_MAX) return INT_MAX;
    return Number.isInteger(parsed) ? parsed : 0;
};