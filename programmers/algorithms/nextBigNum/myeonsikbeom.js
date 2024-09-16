/**문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12911*/
function solution(n) {
    let answer = n+1;
    while(true){
        if(n.toString(2).replaceAll('0','') === answer.toString(2).replaceAll('0','')){
            break;
        }
        answer++;
    }
    return answer;
}