// https://leetcode.com/problems/sum-of-two-integers/submissions/
// Runtime: 48 ms, faster than 89.84% of JavaScript online submissions for Sum of Two Integers.
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let carry;
    
    while(b) {
        carry = a & b;
        a ^= b;
        b = carry << 1;
    }
    
    
    Memory Usage: 33.8 MB, less than 40.00% of JavaScript online submissions for Sum of Two Integers.
    return a;
};