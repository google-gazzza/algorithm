/**문제설명 : https://school.programmers.co.kr/learn/courses/30/lessons/17682*/
const returnBonus = s=>{
    if(s === 'S'){
        return 1;
    }else if(s === 'D'){
        return 2;
    }else if(s === 'T'){
        return 3;
    }
}
function solution(dartResult) {
    let answer = 0;
    const dart = dartResult.match(/\d{1,2}(S|D|T)(\#|\*)?/gi);
    const resultArr = [];   
    for(let i=0;i<dart.length;i++){
        const score = dart[i].match(/\d{1,2}/g)[0];
        const bonus = dart[i].match(/(S|D|T)/g)[0];
        const option = (dart[i].match(/(\#|\*)/g) || [''])[0];
        let result = Math.pow(score,returnBonus(bonus));
        if(option === '#'){
            result *= -1;
        }else if(option === '*'){
            result *= 2;
            resultArr[i-1] *=2;
        }
        resultArr.push(result);
    }    
    return resultArr.reduce((prev,curr)=>prev+curr);
}