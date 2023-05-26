/*문제 설명:https://school.programmers.co.kr/learn/courses/30/lessons/76502*/
function solution(s) {
    let answer = 0;
    const len = s.length;
    let rotate = 0;
    while(rotate < len){
        const stack = [];
        let index = rotate;
        let step = 0;
        for(let step = 0;step<len;step++){
            let stackLen = stack.length;
            if(step > 0 && 
            (  (stack[stackLen -1 ] === '[' && s[index] === ']')
            || (stack[stackLen -1 ] === '(' && s[index] === ')')
            || (stack[stackLen -1 ] === '{' && s[index] === '}'))
            ){
            //스택에 1개이상들어가고, 마지막에 들어간거와 조회할 괄호가 올바른 괄호 문자열일떄 스택에서 하나가빠진다.
            stack.splice(stackLen-1,1);
            }else{//최초또는 마지막 들어간 괄호가 일치하지않으면 스택 추가.
                stack.push(s[index]);
            }
            index++;         
            if(index >= len){//index가 길이를 초과시 0에서 시작(회전시)
                index = 0;
            }
        }
   
        //스택 길이가 0이면 answer++;
        if(stack.length === 0){
            answer++;
        }
        
        rotate++;
    }
    
    return answer;
}