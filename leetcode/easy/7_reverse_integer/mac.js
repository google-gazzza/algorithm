// https://leetcode.com/problems/reverse-integer
// Runtime: 72 ms, faster than 81.97% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 36.3 MB, less than 12.50% of JavaScript online submissions for Reverse Integer.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const main = {
        rev : function(e) {
            return parseInt(e.toString().split('').reverse().join(''));
        },
        
        init : function(e) {
            if (e > 2147483647 || main.rev(e) > 2147483647) {
                return 0;
            } else {
                if (e > 0) {
                    return main.rev(e);
                } else {
                    return -main.rev(e);
                }
            }
        }
    }
    
    return main.init(x);
};