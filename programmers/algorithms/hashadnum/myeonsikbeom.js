/*문제풀이: https://school.programmers.co.kr/learn/courses/30/lessons/12947*/
function solution(x) {
    return x % String(x).split('').reduce((a,b)=>Number(a)+Number(b)) === 0;
}