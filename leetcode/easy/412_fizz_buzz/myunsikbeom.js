/**
 * @param {number} n
 * @return {string[]}
 */
//Runtime: 60 ms, faster than 82.16% of JavaScript online submissions for Fizz Buzz.
//Memory Usage: 37.4 MB, less than 45.00% of JavaScript online submissions for Fizz Buzz.
var fizzBuzz = function(n) {
    var result = ["1"];
    for(var i=1,j = i+1;i<n;i++,j++){
        if(j%15 === 0){
            result.push("FizzBuzz");
        }else if(j%3 === 0){
            result.push("Fizz");
        }else if(j%5===0){
            result.push("Buzz");
        }else{
            result.push(String(j));
        }
    }
    return result;
};
