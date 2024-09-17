/*자세한 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/86491*/
function solution(d, budget) {
    let answer=0;
    d.sort((a,b)=>a-b);
    for(let i= 0; i<d.length;i++){
        if(budget-d[i] < 0){
            break;
        }
        budget -=d[i];
        answer++;
    }
    return answer;
}
