// https://leetcode.com/problems/palindrome-number
// Runtime: 172 ms, faster than 94.76% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 45.4 MB, less than 64.65% of JavaScript online submissions for Palindrome Number.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const main = {
        conv : function(e, l) {
            for (let i = 0; i < l/2; i++) {
                if (e[i] !== e[l-(i+1)]) {
                    return false;
                }
            }
            return true;
        },
        
        init : function(e) {
            if (e < 0) {
                return false;
            } else {
                const array = e.toString().split('');
                return main.conv(array, array.length);
            }
        }
    }
    
    return main.init(x);
};