/*
Runtime: 120 ms, faster than 22.50% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 42.6 MB, less than 46.84% of JavaScript online submissions for Valid Parentheses.
*/
var isValid = function(s) {
    
    const stack=[];
    for(let i=0;i<s.length;i++){
        const curr = s[i];
        const last = stack[stack.length-1] || '';
        if(stack.length === 0 && (curr === ')' ||curr=== '}' || curr === ']')){
            return false;
        }
        if(curr === '(' || curr === '{' || curr === '['){
           stack.push(curr)
        }else if(last === '(' && curr === ')'){
           stack.pop();
        }else if(last === '[' && curr === ']'){
            stack.pop();
        }else if(last === '{' && curr === '}'){
            stack.pop();
        }else{
            return false;
        }
    }
    return stack.length === 0;
};