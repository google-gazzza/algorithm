// https://leetcode.com/problems/fizz-buzz/submissions/
// Runtime: 56 ms, faster than 93.35% of JavaScript online submissions for Fizz Buzz.
// Memory Usage: 37.1 MB, less than 75.00% of JavaScript online submissions for Fizz Buzz.
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        if ((i+1) % 15 === 0)
            arr[i] = "FizzBuzz";
        else if ((i+1) % 3 === 0)
            arr[i] = "Fizz";
        else if ((i+1) % 5 === 0)
            arr[i] = "Buzz";
        else
            arr[i] = (i+1).toString();
    }
    return arr;
};