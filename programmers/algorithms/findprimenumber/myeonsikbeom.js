/**문제링크:https://school.programmers.co.kr/learn/courses/30/lessons/42839 */
function solution(numbers) {
    let answer = 0;
    numbers = numbers.split('').sort((a,b)=>b-a);
    const len = numbers.join('').length;
    const isPrime = num=>{
        if(num < 2){
            return false;
        }
        
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i=== 0){
                return false;
            }
        }
        return true;
    }
    const containNumber = (paramNum)=>{
        const splitArr = String(paramNum).split('');
        let convertNumbers = numbers.join('');
        let result = 0;
        for(let i=0;i<splitArr.length;i++){
            if(convertNumbers.indexOf(splitArr[i]) > -1){
                result ++;
                convertNumbers = convertNumbers.replace(splitArr[i],'');
            }
        }    
        //console.log(paramNum,result,String(paramNum).length);
        return result === String(paramNum).length ? true : false;
    }
    
    
    for(let i=1;i<=numbers.join('');i++){
        
        if(isPrime(i) && containNumber(i)){
          // console.log(i)
            answer++;   
        }
    }
    return answer;
}