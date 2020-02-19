// https://leetcode.com/problems/length-of-last-word/
// Runtime: 48 ms, faster than 94.32% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 33.9 MB, less than 26.92% of JavaScript online submissions for Length of Last Word.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.trim()
    let lastSpace = s.lastIndexOf(" ")
    let len = s.length;

    if(lastSpace===-1){
        return len;
    }
    
    return len-(lastSpace+1);
};