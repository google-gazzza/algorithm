/**
 * @param {number} num
 * @return {number}
 */
//Runtime: 56 ms, faster than 55.62% of JavaScript online submissions for Maximum 69 Number.
//Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Maximum 69 Number.
var maximum69Number  = function(num) {
    let max = num;
    
    let num_arr = String(num).split('');
    let len = num_arr.length;
    for(let i=0;i<num_arr.length;i++){
       let _n = num_arr[i] === '9' ? num-(3*(Math.pow(10,len-i-1))) : num+(3*(Math.pow(10,len-i-1)));
        if(_n > max){
            max = _n;
        }
    }
    return max;
};
