// https://leetcode.com/problems/valid-parentheses/submissions/
// Runtime: 48 ms, faster than 95.18% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 34.5 MB, less than 31.67% of JavaScript online submissions for Valid Parentheses.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const set = {
        '(':')',
        '[':']',
        '{':'}'
    };
    
    for (let ch of s) {
        if (set[ch])
            stack.push(ch);
        else {
            if (set[stack[stack.length -1]] === ch) 
                stack.pop();
            else return false;
        }
    }
    return !stack.length;
};