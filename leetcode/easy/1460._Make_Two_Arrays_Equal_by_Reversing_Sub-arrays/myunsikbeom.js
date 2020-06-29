/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
//Runtime: 80 ms, faster than 54.32% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
//Memory Usage: 37.7 MB, less than 53.42% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
var canBeEqual = function(target, arr) {
   
    let index = -1;
    
    target = target.sort((a,b)=> a-b);
    arr = arr.sort((a,b)=>a-b);
    for(let i=0;i<target.length;i++){
        if(target[i]!==arr[i]){
            return false;
        }
    }
    return  true;
};
