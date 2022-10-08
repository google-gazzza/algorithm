/** 문제:https://school.programmers.co.kr/learn/courses/30/lessons/120956 */

function solution(babbling) {
    let answer = 0;
    const repeatBabblings=['ayaaya','yeye','woowoo','mama'];
    const baseBabblings=['aya','ye','woo','ma'];
    for(let i=0;i<babbling.length;i++){
        
        if(repeatBabblings.find(repeat=> babbling[i].indexOf(repeat) > -1 )){
            babbling[i]='X'
        }else{
            for(let j=0;j<baseBabblings.length;j++){
                const reg = new RegExp(baseBabblings[j],'gi');
                babbling[i]=babbling[i].replace(reg,'');
            }
            if(!babbling[i]){
                answer++;
            }
        }    
    }
        
    return answer;
}