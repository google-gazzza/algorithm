/**문제링크: https://school.programmers.co.kr/learn/courses/30/lessons/12909*/
function solution(s){
    console.log(is_pair(s));
    if(s.charAt(0) ===')' || s.charAt(s.length-1) ==='('){
        return false;
    }
    let openCharCount=0,closeCharCount=0;;
    for(let i=0;i<s.length;i++){
        if(s.charAt(i) === '('){
            openCharCount++;
        }else{
            openCharCount--;
        }
        if(openCharCount < 0){
            return false;
        }
    }
    
    return openCharCount > 0 ? false: true;
}
