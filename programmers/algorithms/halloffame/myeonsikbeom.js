/*문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/138477*/
function solution(k, score) {
    const answer = [];
    const honor=[];
    for(let i=0;i<score.length;i++){
        honor.push(score[i]);
        if(honor.length <= k ){//명예의 전당에 점수가 찰때까지는 넣은 배열중에 가장 작은수를 answer에 push
            answer.push(Math.min(...honor));
            continue;
        }
        honor.sort((a,b)=>a-b);//오름차순으로 정렬
        honor.splice(0,1);//최하위는 점수 탈락
        answer.push(Math.min(...honor));//k명의 명예의 전당중 최저점 push
        
    }
    return answer;
}