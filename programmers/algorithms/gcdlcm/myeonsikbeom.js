/**문제 참고:https://school.programmers.co.kr/learn/courses/30/lessons/12940*/
function solution(n, m) {
    const nInsu=[1],mInsu=[1];
    for(let i=2;i<=Math.max(n,m);i++){
        while(n%i===0 && m%i === 0 ){
            nInsu.push(i);
            mInsu.push(i);
            n /= i;
            m /= i;
            i = 2;
        }
    }
    return [nInsu.reduce((prev,curr)=> prev*curr), nInsu.reduce((prev,curr)=> prev*curr) * n * m ];
}