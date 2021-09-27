/*
https://leetcode.com/problems/number-of-1-bits/submissions/
Runtime: 68 ms, faster than 50.80% of JavaScript online submissions for Number of 1 Bits.
Memory Usage: 35.3 MB, less than 10.00% of JavaScript online submissions for Number of 1 Bits.
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) { 
    
    var count = 0;
    var bitstr = n.toString(2);
    
    for (var i = 0; i < bitstr.length; i++) {
        if (bitstr[i] == '1')
        {
            count += 1;
        }
    }
    
    return count
};
