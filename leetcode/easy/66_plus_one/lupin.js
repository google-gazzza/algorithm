// https://leetcode.com/problems/plus-one/
// Runtime: 52 ms, faster than 85.95% of JavaScript online submissions for Plus One.
// Memory Usage: 33.7 MB, less than 93.62% of JavaScript online submissions for Plus One.
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let digitsLen = digits.length-1;
    let carry = 1;
    let plusOneArr=[];

    for(let i=digitsLen; i>=0; i--){
        let plusCarry = digits[i]+carry;
        if(plusCarry>9){
            digits[i]=0;
        }else{
            digits[i]=plusCarry;
            carry=0;
        }
        plusOneArr.push(digits[i]);
    }

    if(carry>0){
        plusOneArr.push(carry);
    }
    return plusOneArr.reverse();
};
