/**
 * @param {number} n
 * @return {number}
 */

/*
Runtime: 4320 ms, faster than 5.32% of JavaScript online submissions for Minimum Operations to Make Array Equal.
Memory Usage: 44.8 MB, less than 7.45% of JavaScript online submissions for Minimum Operations to Make Array Equal.
*/

var minOperations = function(n) {
    let count=0;
    let arr =[];
    for(let i=0;i<n;i++){
        arr.push((2*i)+1);
    }
   
    
  
     /*모든 배열의 값이 같아지려면 arr[i] 와 arr[j]의 뺀값을 2로 나누면 
        수행횟수가 된다.
        */
    /*
    Runtime: 80 ms, faster than 83.51% of JavaScript online submissions for Minimum Operations to Make Array Equal.
Memory Usage: 44.3 MB, less than 14.89% of JavaScript online submissions for Minimum Operations to Make Array Equal.
    */
    for(let i=0,j=arr.length-1;j<n-1,i<j;i++,j--){
        count+=(arr[j]-arr[i])/2;
    }
      /*
    ※본인 구현 알고리즘 시간이 3초이상 나옴;;;;
    제일 작은 값은 절반의 길이 요소까지만
    제일큰 요소는 역순으로 반복을 돌리면서
    두개 의 값이 같아질때까지 +1과 -1을 반복한다.
    
    */
   /* let half_arr= Math.floor(arr.length-1/2);//추출한배열의 절반 길이
    for(let i=0, j=arr.length-1
        ; i<=half_arr, j>=half_arr, i<=j
        ; i++, j--){
        while(true){
            if(arr[i]===arr[j]){
                break;
            }
            arr[i]+=1;
            arr[j]-=1;
            count++;
        }
    }*/
    return count;
};
