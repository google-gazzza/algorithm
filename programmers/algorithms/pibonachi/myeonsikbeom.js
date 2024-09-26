/**문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12945 */
const pibonachiArr = [0,1];
const pibonachi= n=>{
    if(pibonachiArr[n]){
        return pibonachiArr[n];
    }
    if(n<2){
        return n;
    }
    pibonachiArr.push(((pibonachi(n-1) %1234567) + (pibonachi(n-2) %1234567)) %1234567);
    return pibonachiArr[n];
}
function solution(n) {
    for(let i=0;i<n;i++){
        pibonachi(i);
    }
    console.log(pibonachiArr)
    return pibonachi(n);
}