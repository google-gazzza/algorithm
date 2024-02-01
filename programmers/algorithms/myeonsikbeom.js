/** 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17681 */
function solution(n, arr1, arr2) {
    const answer = [];
    for(let i=0;i<n;i++){
       let temp = (arr1[i] | arr2[i]).toString(2); //비트 연산자 2진수중에 하나라도 1이 있으면 1변환
       let line=[];
       for (let j = temp.length - n; j < temp.length; j++) {
          if (temp[j] == 1) {
            line.push("#");
          } else {
            line.push(" ");
          }
        }
    answer.push(line.join(""));
    }
    return answer;
}


