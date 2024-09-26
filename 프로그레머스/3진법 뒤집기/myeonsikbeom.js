/*자세한 문제 https://school.programmers.co.kr/learn/courses/30/lessons/68935# */
function solution(n) {
    const arr = [];
    while(n >= 3){ //몫이 3보다 작을떄까지 계속 나눈다.
        arr.push(n%3); //나머지값을 배열에 넣는다.
        n = Math.floor(n/3,0); //n값을 3으로 나눈 몫값으로 대체
    }
    arr.push(n);// 남은 몫까지 push
    return arr.map((n,i)=>n*Math.pow(3,arr.length-(i+1))).reduce((prev,curr)=>prev+curr); //3->10진수 변환하고 계산.
}