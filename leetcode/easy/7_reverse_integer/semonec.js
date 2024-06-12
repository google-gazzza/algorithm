// https://leetcode.com/problems/reverse-integer/
// Runtime: 56 ms, faster than 99.81% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 35.7 MB, less than 86.46% of JavaScript online submissions for Reverse Integer.
/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    let x_clone = x;
    let reversed = 0;
    
    while (x_clone) {
        let digit = x_clone % 10;
        x_clone = (x_clone - digit) / 10; 
        reversed += digit;
        if (x_clone) reversed *= 10;
    }

    let isValid = (value) => {
        let MAX_VAL = Math.pow(2, 31);
        return (value > 0 && value > (MAX_VAL - 1))
                || (value < 0 && value < (MAX_VAL * -1)) ? 0 : value;
    }
    return isValid(reversed);
    
};