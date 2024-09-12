/** 자세한 문제 https://school.programmers.co.kr/learn/courses/30/lessons/12915 */

function solution(strings, n) {
    var answer = [];
    strings.sort((a,b)=>{
        if(a[n].charCodeAt()-b[n].charCodeAt() < 0){
            return -1;
        }else if(a[n].charCodeAt()-b[n].charCodeAt() > 0){
            return 1;
        }else if(a<b){
            return -1
        }else if(a>b){
            return 1;
        }
        return 0;
    })
    return strings;
}
