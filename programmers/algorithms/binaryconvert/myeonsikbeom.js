/**문제 설명 : https://school.programmers.co.kr/learn/courses/30/lessons/70129 */
function solution(s) {
    let answer = [0,0];
    while(s !== '1'){
        answer[1] += (s.match(/[0]/gi) || []).length; //0인 길이만큼 더하기
        s = s.replace(/[0]/gi,'').length;
        s = s.toString(2);//1 길이 만큼 2진수 변환
         answer[0]++; //횟수 더하기
    }
    return answer;
}