/**
 * @param {number[]} arr
 * @return {number[]}
 */
//Runtime: 84 ms, faster than 65.70% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
//Memory Usage: 39.1 MB, less than 100.00% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
var replaceElements = function(arr) {
   let max = arr[0], max_i=0, result = [];
    do{
       for(let i=max_i;i<arr.length;i++){
           if(max < arr[i]){
               max = arr[i];
               max_i=i;
           }
       }
       for(let i=result.length;i<max_i;i++){
           result.push(max);
       }
       max = arr[max_i+1];
       max_i+=1;
       
    }while(max_i!==arr.length)
       result.push(-1);  
   return result;
};
