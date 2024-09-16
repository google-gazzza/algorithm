
/**문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12980 */
//2진수로 푸는 방법
function solution(n)
{
    return n.toString(2).replace(/0/gi,'').length;
}

