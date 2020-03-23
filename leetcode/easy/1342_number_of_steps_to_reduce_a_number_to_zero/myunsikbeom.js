/**
 * @param {number} num
 * @return {number}
 */
//Runtime: 52 ms, faster than 82.96% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
//Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
var numberOfSteps  = function(num) {
    var step = 0;
    
    do{
         ++ step;
        num = (num % 2 === 0) ? (num / 2) : (num -1);
    }while(num > 0)
    
        return step;
        
};
