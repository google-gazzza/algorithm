// https://leetcode.com/problems/roman-to-integer/
// Runtime: 128 ms, faster than 96.70% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 40.6 MB, less than 17.02% of JavaScript online submissions for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const main = {
        symbolArr : {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000},
        
        init : function(e, l, z) {
            for (let i = 0; i < l; i++) {
                let now = main.symbolArr[e[i]];
                let next = main.symbolArr[e[i + 1]];
                
                if (now < next) {
                    z += next - now;
                    i++;
                } else {
                    z += now;
                }
                
            }
            
            return z;
        }
    }
    
    return main.init(s.split(''), s.split('').length, 0);
};