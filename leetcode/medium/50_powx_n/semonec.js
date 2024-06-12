// https://leetcode.com/problems/powx-n/submissions/
// Runtime: 44 ms, faster than 99.58% of JavaScript online submissions for Pow(x, n).
// Memory Usage: 33.9 MB, less than 47.06% of JavaScript online submissions for Pow(x, n).
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {


    let pow = (v, m) => {
        if (m === 0) return 1;
        if (m === 1) return v;
        if (m % 2 === 0) 
            return pow (v*v, m/2);
        else
            return pow (v*v, (m-1)/2) * v;
    }
    
    const result = pow(x, Math.abs(n));
    if (n < 0) return 1/result;
    return result;
    
};