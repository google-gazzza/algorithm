/*문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/87390*/
function solution(n,left,right){
    let answer = [];
    for(let i=left;i<=right;i++){
        let x = parseInt(i/n);
        let y = parseInt(i%n);
        answer.push(Math.max(x,y)+1);
    }
    return answer;

}