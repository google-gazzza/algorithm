/** 참고링크: https://school.programmers.co.kr/learn/courses/30/lessons/77884 */
function solution(left, right) {
    let answer = 0;
    for(let i=left;i<=right;i++){
        const divisorArr = [];
        for(let j = 1; j<= Math.floor(i/2,0);j++){ //약수의 갯수를 구하기위한 추가 로직( 주어진수의 절반까지만 수행)
            if(i%j === 0){
                divisorArr.push(j);
            }
        }
        divisorArr.push(i);
        if(divisorArr.length % 2 === 0){ //짝수면 + 음수면 -
            answer += i;
        }else{
            answer -= i;
        }
    }
    Math.IsInte
    return answer;
}

/** 그외 답변 */
function extra(left, right) {
    let answer = 0;
    for(let i=left;i<=right;i++){
        if(Number.isInteger(Math.sqrt(i))){ //i의 제곱근이 정수면 무조건 약수는 양수 개를 가짐.(ex.16의 약수는 1,2,4,8,16 25의 약수는 1,5,25)
            answer -= i;
        }else{
            answer += i;
        }
    }
    return answer;
}