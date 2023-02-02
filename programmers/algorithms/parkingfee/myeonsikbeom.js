/*문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/92341*/
function solution(fees, records) {
    const answer = [];
    const convertMin = (hour,min)=> (hour * 60) + min
    const getFee = time => {
        const [baseMin,baseFee,addUnitTime,addUnitFee] = fees;
        let result = baseFee;
        if(time >= baseMin){
            result += Math.abs( Math.ceil((time-baseMin) / addUnitTime)) * addUnitFee 
        }
        return result;
    }
    const timeObj = {};
    
    for(let i = 0;i<records.length;i++){
        const [date,carnum,inout] = records[i].split(' ');
        const [hour,min]=date.split(':')
        if(!timeObj[carnum]){
            timeObj[carnum] = [];
        }
        
        timeObj[carnum].push(convertMin(parseInt(hour,10),parseInt(min,10)) * (inout === 'IN' ? 1 : -1));    
            
    }
    for(const key in timeObj){
        const timeArr = timeObj[key];
        let time = 0;
        timeArr.forEach((minute,index)=>{
            time += minute;
            if(minute >= 0 && index === timeArr.length-1){
                time = Math.abs(time-convertMin(23,59));            
            }
        })
        answer.push(`${key} ${getFee(Math.abs(time))}`);
    }
    
    return answer.sort((a,b)=> a.split(' ')[0] - b.split(' ')[0] ).map(a=>parseInt(a.split(' ')[1]))
}