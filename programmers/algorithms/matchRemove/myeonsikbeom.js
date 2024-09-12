/**https://school.programmers.co.kr/learn/courses/30/lessons/12973*/
function solution(s){   
    if(!s){
        return 0;
    }
    if(s.length %2 === 1) return 0;
    const stack = [];
    for(let i=0;i<s.length;i++){
        if(stack.length === 0){
            stack.push(s[i]);
        }else if(stack.length > 0 && stack[stack.length-1] !== s[i]){
            stack.push(s[i]);
        }else if(stack.length > 0 && stack[stack.length-1] === s[i]){
            stack.pop();
        }
    }
    return stack.length === 0 ? 1 : 0;
} 