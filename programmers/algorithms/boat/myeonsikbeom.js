/**
 * 문제링크: https://school.programmers.co.kr/learn/courses/30/lessons/42885
 */

function solution(people, limit) {
    var answer = 0;
       if(people.length === 1){
           return 1;
       }
       people.sort((a,b)=> Number(b)-Number(a));
       let first = 0, last = people.length-1;
       while(first <= last){
           answer++;
           if(people[first] + people[last] <= limit){
               first ++;
               last --;
           }else{
               first++;
           }
       }
   return answer;
}