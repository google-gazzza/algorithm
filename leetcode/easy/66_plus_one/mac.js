// https://leetcode.com/problems/plus-one/
// Runtime: 48 ms, faster than 95.97% of JavaScript online submissions for Plus One.
// Memory Usage: 33.8 MB, less than 65.96% of JavaScript online submissions for Plus One.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const main = {
        init : function(e, l) {
            let arr = [];
            let bool = false;

            for (var i = l; i >= 0; i--) {
                if (bool === true) {
                     e[i] = e[i] + 1;
                }
               
                if (l === i) {
                    e[i] = e[i] + 1;
                } 

                if (e[i] === 10) {
                    if (bool === false) {
                        bool = true;
                    }
                    
                    arr.push(0);
                } else {
                    bool = false;
                    arr.push(e[i]);
                }
            }
            
            if (bool === true) {
                arr.push(1);
            }
            
            return arr.reverse();
        }
    }
    
    return main.init(digits, digits.length-1);
};