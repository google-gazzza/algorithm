/**문제 설명 https://school.programmers.co.kr/learn/courses/30/lessons/12951 */
function solution(s) {
    var answer = '';
    
    return s.split(' ').map(char=> `${char.charAt(0).toUpperCase()}${char.substring(1).toLowerCase()}`).join(' ');
}