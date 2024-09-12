/**문제링크: https://school.programmers.co.kr/learn/courses/30/lessons/147355 */
function solution(t, p) {
    let answer = 0;
    const pLen = p.length;
    for(let i=0;i<t.length-pLen+1;i++){
        if(parseInt(t.substring(i,pLen+i)) <= p){
            answer++;
        }
    }
    return answer;
}