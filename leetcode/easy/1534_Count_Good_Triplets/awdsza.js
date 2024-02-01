/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
/*
Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Count Good Triplets.
Memory Usage: 38.4 MB, less than 87.58% of JavaScript online submissions for Count Good Triplets.
*/
var countGoodTriplets = function(arr, a, b, c) {
    let result = 0;
    /*0<=i<j<k 순서이기 때문에 i는 배열이 최소 2번 덜 돌아야한다.*/
    for(let i=0;i<arr.length-2;i++){
        /*j는 최소 i보다 크기때문에 i+1부터 시작하고 k 보다 항상 작아야한다.*/
        for(let j=i+1;j<arr.length-1;j++){
            /*k는 최소 j보다 커야하고 arr.length보다 작아야한다.*/
            for(let k=j+1;k<arr.length;k++){
                if(Math.abs(arr[i]-arr[j]) <= a
                  && Math.abs(arr[j]-arr[k]) <= b
                  && Math.abs(arr[i]-arr[k]) <= c){
                    result ++;
                }        
            }
        }
    }
    return result;
};
