// https://leetcode.com/problems/length-of-last-word/
// Runtime: 48 ms, faster than 93.73% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 34.9 MB, less than 7.69% of JavaScript online submissions for Length of Last Word.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const data = s.trim();
    const main = {
        init : function(e, l) {
            let charLen = 0;
            
            for (let i = 0; i < l; i++) { 
                if (e.charAt(i) == ' ') {
                    charLen = 0; 
                } else {
                    charLen++; 
                }
                    
            }
            
            return charLen;
        }
    }
    
    return main.init(data, data.length);
};