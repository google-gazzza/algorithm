/*문제링크: https://school.programmers.co.kr/learn/courses/30/lessons/133502*/
function solution(ingredient) {
    let answer=0;
    const stack = [];
    for(let i=0;i<ingredient.length;i++){
        const _ingredient = ingredient[i];
        stack.push(_ingredient);      
        if(stack.length > 3 
           && stack[stack.length -1] === 1 
           && stack[stack.length -2] === 3
          && stack[stack.length -3] === 2
          && stack[stack.length -4] === 1
          ){//햄버거는 최소 재료가 4개이상이 들어갈떄 만들어지니, 스택에 있는 요소가 최신순으로(빵-고기-야채-빵)으로 들어가면 스택에서 빠지면서 answer 값이 더해진다.
          stack.splice(stack.length-1,1);
          stack.splice(stack.length-1,1);
          stack.splice(stack.length-1,1);
          stack.splice(stack.length-1,1);
            answer++;
        }
    }
    return answer;
}