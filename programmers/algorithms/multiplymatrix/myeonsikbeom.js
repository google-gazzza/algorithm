/*
자세한 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/12949
 ex)
 answer[0,0] => arr1의 0행과 arr2 0열의 값을 곱해서 더한값
 answer[0,0] => arr1의 0행과 arr2 0열의 값을 곱해서 더한값
*/
function solution(arr1, arr2) {
    const arr1Len = arr1.length;
    const arr2RowLen = arr2[0].length;
    const answer = new Array(arr1Len).fill([]).map(_=>new Array(arr2RowLen).fill(0));
    
    for(let i=0;i<arr1Len;i++){
        let arr1Row = arr1[i];
        for(let j=0;j<arr1Row.length;j++){
           for(let k=0;k<arr2RowLen;k++){
               answer[i][k] += (arr1[i][j] * arr2[j][k]);
           }
        }       
    }
    return answer;
}