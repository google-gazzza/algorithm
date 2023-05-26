// https://leetcode.com/problems/excel-sheet-column-number/submissions/
// Runtime: 60 ms, faster than 97.91% of JavaScript online submissions for Excel Sheet Column Number.
// Memory Usage: 35.6 MB, less than 66.67% of JavaScript online submissions for Excel Sheet Column Number.
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    s.toUpperCase();
    
    let result = 0;
 
    s.split('').forEach((v,i) => {
        result += Math.pow(26, (s.length -1 - i))*(v.charCodeAt() - 64);
    })
    return result;
};