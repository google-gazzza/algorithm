/*문제 설명: https://school.programmers.co.kr/learn/courses/30/lessons/12985*/
function solution(n,a,b)
{
    let answer = 0;
    let small,big;
    if( a > b){
        small = b;
        big = a;
    }else{
        small = a;
        big = b;
    }
    
    while( small !== big ){
            small = Math.round(small/ 2);
            big = Math.round(big/ 2);
        answer++;
    }

    return answer;
}