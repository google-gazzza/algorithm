/**문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12953*/
function solution(arr) {
    
    let max = Math.max(...arr);
    let answer = max;
    const len = arr.length;
    
    while(arr.filter(num=> answer%num === 0).length !== len){
        answer += max
    }
    return answer;
}