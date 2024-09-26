/**문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12924*/
function solution(n) {
    let answer=1;
    for(let i=Math.ceil(n/2);i>0;i--){
        let sum = i;
        for(let j=i-1;j>0;j--){
            if(sum+j === n){
                answer++;
                break;
            }else if(sum+j > n){
                break;
            }else{
                sum+=j;
            }
        }
        
    }
    return answer;
}