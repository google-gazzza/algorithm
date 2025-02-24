/*문제 내용:https://school.programmers.co.kr/learn/courses/30/lessons/12938*/
function solution(n, s) {
    if(n>s) return [-1]; //n>s일떄는 최소1 이상의 값을 가진 길이가 n인 배열의 합은 S가 될수가 없음.
    
    let sum = Math.floor(s/n);
    let rest = s%n;
    const arr = new Array(n).fill(sum); // 최고의 집합은 집합간의 간격이 적으면서 조건을 만족하는 집합 이 작업을 하기위해 s/n의 값을 가진 배열을 생성.
    for(let i=0;i<rest;i++){//나머지 길이만큼 반복을 돌려 값을 1씩 증가시키면 최고의 집합이 됨.
        arr[arr.length-i-1] += 1;
    }
    return arr;
}