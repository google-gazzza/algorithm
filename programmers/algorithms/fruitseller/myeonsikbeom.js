/**문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/135808 */
function solution(k, m, score) {
    score.sort((a,b)=>b-a);
    let answer = 0;
    const basketArr = [];
    
    let start = 0;
    let end = m;
    let step = 1;
    while(end <= score.length-1){
        let basket = [];
        start = (step-1)*m;
        end = step*m;
        for(let i=start;i<end;i++){
            if(score[i]){
                basket.push(score[i]);    
            }
            
        }
        step++;
        if(basket.length < m){
            break;
        }
        answer += (Math.min(...basket) * m)
    }
    
    return answer;
}