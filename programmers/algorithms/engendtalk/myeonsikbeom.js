/**문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/12981*/
function solution(n, words) {
    let time=1;
    for(let i=0;i<words.length;i++){
        if(i>0){
            if(words[i-1].charAt(words[i-1].length-1) !== words[i].charAt(0)
              || words.indexOf(words[i]) !== i ){
                return [(i%n)+1,time];
            }
            if((i+1)%n === 0){
                time ++;
            }
        }
    }   
    return [0,0];
}