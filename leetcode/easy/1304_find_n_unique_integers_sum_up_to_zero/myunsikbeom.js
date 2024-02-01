/**
 * @param {number} n
 * @return {number[]}
 */
//Runtime: 64 ms, faster than 34.67% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
//Memory Usage: 35 MB, less than 100.00% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
var sumZero = function(n) { 
    let unique = new Array(n).fill(0);
    for(let i=0;i<n-1;i++){
        unique[i]=i;
    }
    let sum = unique.reduce((cur,acc,i)=> { return cur+acc;});
    unique[n-1]=(sum * -1);
    return unique;
};
