// https://leetcode.com/problems/palindrome-number/
// Runtime: 212 ms, faster than 37.59% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 45.1 MB, less than 85.34% of JavaScript online submissions for Palindrome Number.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }

    let backward = [];
    let last;

    // read backward
    while(x!=0){
        last = x % 10; 
        backward.push(last);
        x = (x-last) / 10;
    }

    // check Palindrome
    let forward = [...backward].reverse();
    for(let i=0; i<forward.length; i++){
        if( forward[i] !== backward[i] ){
            return false;
        }
    }
    return true;
};