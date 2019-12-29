// https://leetcode.com/problems/plus-one/
// Runtime: 52 ms, faster than 85.95% of JavaScript online submissions for Plus One.
// Memory Usage: 33.7 MB, less than 93.62% of JavaScript online submissions for Plus One.
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    let plusOneArr=[];
    let plusCarry;

    for(let i=digits.length-1; i>=0; i--){
        plusCarry = digits[i]+carry;
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
}
