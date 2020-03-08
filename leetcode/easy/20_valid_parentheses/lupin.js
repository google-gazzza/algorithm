// https://leetcode.com/problems/valid-parentheses/
// Runtime: 48 ms, faster than 96.42% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 33.8 MB, less than 90.00% of JavaScript online submissions for Valid Parentheses.
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let parentheses = new Map();
    parentheses.set("}","{");
    parentheses.set("]","[");
    parentheses.set(")","(");

    let stack = [];
    let char;
    for(let i=0, len=s.length; i<len; i++){
        char = s[i];
        if(parentheses.has(char)){
            if(stack.length===0){
                return false;
            }
            if(parentheses.get(char)!=stack.pop()){
                return false;
            }
        }else{
            stack.push(char);
        }
    }

    if(stack.length===0){
        return true;
    }else{
        return false;
    }
};
