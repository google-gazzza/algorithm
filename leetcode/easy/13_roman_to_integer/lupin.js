// https://leetcode.com/problems/roman-to-integer/ 
// Runtime: 148 ms, faster than 52.87% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 39.5 MB, less than 95.74% of JavaScript online submissions for Roman to Integer.
/**
 * @param {string} s
 * @return {number}
 */
const nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

var romanToInt = function(s) {
    let temp = 0;
    let result = 0;

    for(let i=0; i<s.length; i++){
        let item = nums[s[i]];
        if(temp === 0){
            temp = item;
        }else if(temp >= item){
            result = result + temp;
            temp = item;
        }else{
            temp = item-temp;
            result = result + temp;
            temp = 0;
        }
    }
    result = result + temp;
    return result;
};