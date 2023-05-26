/*문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/134240*/
function solution(food) {
    
    let answer = '';
    for(let i=1;i<food.length;i++){
            answer+=String(i).repeat(parseInt(food[i]/2));
    }
    answer +='0' + answer.split('').reverse().join('');
    return answer;
}

