/*문제링크:https://blog.naver.com/seijin0722/222936929064*/
function solution(n, k) {
    let answer = 0;
    const isSosu = n=>{
        if(!n) return false;
        n = parseInt(n);
        if(n === 1) return false;
        if(n === 2) return true;
        let result = true;
        for(let i=3;i<=Math.sqrt(n+1);i++){
            if(n%i === 0){
              result = false;
                break;
            } 
        }
        return result;
    }
    const baseRedixArr = n.toString(k).replace(/0/gi,' ').split(' ').filter(a=> a);
    
    for(let i=0;i<baseRedixArr.length;i++){
        let sosuNum = baseRedixArr[i];
        if(isSosu(sosuNum)){
            answer++;
        }
    }
        
    return answer;
}