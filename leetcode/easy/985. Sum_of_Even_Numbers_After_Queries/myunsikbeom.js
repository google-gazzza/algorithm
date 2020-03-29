/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
//Runtime: 8460 ms, faster than 23.81% of JavaScript online submissions for Sum of Even Numbers After Queries.
//Memory Usage: 47.3 MB, less than 60.00% of JavaScript online submissions for Sum of Even Numbers After Queries.
var sumEvenAfterQueries = function(A, queries) {
    var result = [];
   for(var i=0;i<A.length;i++){
       var val = queries[i][0],index=queries[i][1];
       var sum = val + (!A[index] ? 0 : A[index]) ;
       A[index] = sum;
       
       var event_sum = A.reduce((acc,cur,i) => {
           return cur%2 === 0 ? acc+cur : acc;
       },0)
      result[i]= event_sum;
   }
    return result;
};
