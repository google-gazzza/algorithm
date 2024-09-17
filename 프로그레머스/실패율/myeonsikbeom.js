/* 상세 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42889 */
function solution(N, stages) {
    stages.sort((a,b)=>a-b); //현재 사용자 스테이지 오름차순으로 정렬
    const rateArr = []
    for(let i=0;i<N;i++){
        const filterArr = stages.filter(stage => stage === i+1 ); //현재 도전중인 스테이지 filtering
        rateArr[i] = {index:i+1,rate:filterArr.length === 0 ? 0 : filterArr.length/stages.length}; //현재 스테이지에 대한 실패율 구함
        
        
        for(let j=0;j<filterArr.length;j++){ //해당 스테이지 배열은 비움 처리.
            stages.shift();
        }
        
    }
    return rateArr.sort((a,b)=> b.rate-a.rate).map(({index})=> index);
}