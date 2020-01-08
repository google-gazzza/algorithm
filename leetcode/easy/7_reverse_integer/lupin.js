// https://leetcode.com/problems/reverse-integer
// Runtime: 64 ms, faster than 97.26% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 35.5 MB, less than 92.71% of JavaScript online submissions for Reverse Integer.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //overflow range
    const rangeFrom = Math.pow(-2,31);
    const rangeTo = Math.pow(2,31)-1;
    
    if(rangeFrom > x || x > rangeTo || x===0){
        return 0; 
    }
    
    let reverseInt = 0;
    let last;

    while (x!=0){
        last = x % 10;
        reverseInt = reverseInt*10 + last;
        x = (x - last) / 10;
        
        if(rangeFrom > reverseInt || reverseInt > rangeTo){
            return 0; 
        }
    }
    return reverseInt;
}