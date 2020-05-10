// https://leetcode.com/problems/generate-parentheses/submissions/
// Runtime: 52 ms, faster than 86.61% of JavaScript online submissions for Generate Parentheses.
// Memory Usage: 35.2 MB, less than 53.85% of JavaScript online submissions for Generate Parentheses.
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    
    let backtracking = (left, right, str) => {
        if (left > right) return;
        if (left === 0 && right === 0) {
            result.push(str);
            return;
        }
        if (left > 0) backtracking(left -1, right, str + '(');
        if (right > 0) backtracking(left , right -1, str + ')');
    }
    backtracking(n,n,'');
    return result;
};