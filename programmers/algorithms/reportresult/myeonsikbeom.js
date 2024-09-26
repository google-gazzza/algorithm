/*문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/92334*/
function solution(id_list, report, k) {
    const answer = {};
    const reportedObj = {};
    
    const reports = [...new Set(report)].map(r=> r.split(' '));
    
    for(const o of reports){//신고당한 대상 목록 수집
        if(reportedObj[o[1]]){
            reportedObj[o[1]] += 1;
        }else{
            reportedObj[o[1]] = 1;
        }
    }
   
    for(const result in reportedObj){//메일 전송될 대상 건수 값 구하기
        if(reportedObj[result] >= k){
            for(const reportObj of reports){
                if(reportObj[1] === result){
                    answer[reportObj[0]] = answer[reportObj[0]]+1 || 1; 
                }
            }
        }
    }
    
     return id_list.map(id=>answer[id] || 0);
}