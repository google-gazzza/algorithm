// https://leetcode.com/problems/valid-parentheses/
// Runtime: 52 ms, faster than 86.75% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 35.9 MB, less than 8.33% of JavaScript online submissions for Valid Parentheses.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let main = {
        check : true,
        inArr : [],
        left  : {'(': 1, '{': 2, '[': 3},
        right : {')': 1, '}': 2, ']': 3},

        init : function(e, l) {
            if (e.length % 2 != 0) { 
                main.check = false;
            } 
            
            for(let i = 0; i < l; i++){
                if (e[i] !== undefined) {
                    if (main.left[e[i]] !== undefined) {
                        main.inArr.push(main.left[e[i]]);
                    }
                }

                if (e[l-i] !== undefined) {
                    if (main.right[e[i]] !== undefined) {
                        if (main.inArr[main.inArr.length-1] === main.right[e[i]]) {
                            main.inArr.pop();
                        } else {
                            main.check = false;
                        }
                    }
                }
            }

            if (main.inArr.length != 0) {
                main.check = false;
            } 
            
            return main.check;
        }
    }
    
    return main.init(s, s.length);
};