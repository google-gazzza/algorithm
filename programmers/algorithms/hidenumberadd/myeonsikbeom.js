/*문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/120864*/
function solution(my_string) {
    const numberMatch = my_string.match(/[0-9]{1,}/gi);
    return !numberMatch ? 0 : numberMatch.reduce((a,b)=>parseInt(a,10)+parseInt(b,10),0);
}