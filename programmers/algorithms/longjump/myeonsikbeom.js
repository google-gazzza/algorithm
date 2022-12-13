/*문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/12914*/
function solution(n) {
    const caseArr=[0,1,2,3];
    const func = n =>{
        if(n===0 || n===1 ||n===2 ||n=== 3){
            return n;
        }
        if(caseArr[n]){
            return caseArr[n];
        }
        const res = (func(n-2) + func(n-1)) % 1234567;
        caseArr.push(res);
        return res;
    }
    func(n)
    return caseArr[n];
}