// https://leetcode.com/problems/sqrtx/submissions/
// Runtime: 72 ms, faster than 72.77% of JavaScript online submissions for Sqrt(x).
// Memory Usage: 35.6 MB, less than 69.44% of JavaScript online submissions for Sqrt(x).
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x<2) return x;
    
    let l = 0;
    let r = x;
    while (l <= r) {
        const mid = (l+r) >> 1; 
        const square = mid*mid;
        if (square < x) {
            l = mid +1;
            
        } else if (square > x) {
            r = mid - 1;
        } else {
            return mid;
        }
    }
    return r;
};