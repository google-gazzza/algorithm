/** 문제 참고: https://school.programmers.co.kr/learn/courses/30/lessons/12939 */
function solution(s) {
    const numberArr = s.split(' ').sort((a,b)=> Number(a)-Number(b));
    return String(`${numberArr[0]} ${numberArr[numberArr.length-1]}`);
}

/** 다른 풀이 */
function solution2(s) {
    const numberArr = s.split(' ');
    return String(`${Math.min(...numberArr)} ${Math.max(...numberArr)}`);// Math.min(max) 주어진 값들중에 가장 크거나 작은 값들을 변환. 비구조화할당 문법을 통한 Math.min(max)를 사용.
}
