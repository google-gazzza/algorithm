/*
A~Z 문자는 사전에 이미 있다는 조건
현재 문자 or 문자열이 사전에 있으면 현재 문자 or 문자열 + 다음 문자 사전에서 찾기 
-> 없으면 사전에 등록(있으면 전 단계 반복) 
-> 현재 문자 or 문자열 인덱스 값 출력 
-> 현재 문자 or 문자열 다음의 문자에서 다시 시작
*/
/**문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/17684#qna */
function solution(msg) {
    const answer = [];
    const dictionary = {};
    let stack = [];
    let voca = '';
    let lastIndex = 27;
    
    for(let i=0;i<26;i++){
        dictionary[String.fromCharCode(65+i)] = i+1;
    }
    
    for(let i=0;i<msg.length;i++){
        
        if(dictionary[voca+msg[i]]){
            stack.push(voca);
            voca +=msg[i];
        }else{
            //사전 추가
            dictionary[voca+msg[i]] = lastIndex;
            lastIndex++;
            stack = stack.slice(i);
            answer.push(dictionary[voca]);
            voca = msg[i]
        }
        if(i===msg.length-1){
            answer.push(dictionary[voca]);
        }
    }
    return answer;
}