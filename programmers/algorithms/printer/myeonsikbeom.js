/**문제링크: https://school.programmers.co.kr/learn/courses/30/lessons/42587 */
function solution(priorities, location) {
    let answer = 0;
    const documents = [];
    for(let i=0;i<priorities.length;i++){
        documents.push([priorities[i],i]); //우선순위와 위치가 같이 있는 2차원 배열 생성
    }
    let maxPriorites = Math.max(...priorities);//최대 순위값 추출.
    let stack = [];
    while(documents.length > 0){
        const shift = documents.shift(); //맨처음 문서 추출
        if(maxPriorites !== shift[0]){ //우선순위 문서가 아닐때 맨뒤에 push
            documents.push(shift);
        }else if(maxPriorites === shift[0]){ //우선순위 문서일때 
            maxPriorites = Math.max(...documents.map(d=>d[0]));//그 다음 우선순위 값 추출
            stack.push(shift); //출력한 문서 push
             if(stack[stack.length-1][1] === location){ //대기목록에 위치했던 문서가 출력이 되었을때 stack의 길이값을 return 한다.
                answer = stack.length;
                 break;
            }
        }
    }
    
    return answer;
}