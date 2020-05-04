/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime: 60 ms, faster than 50.12% of JavaScript online submissions for Find Numbers with Even Number of Digits.
//Memory Usage: 36.8 MB, less than 100.00% of JavaScript online submissions for Find Numbers with Even Number of Digits.
var findNumbers = function(nums) {
    let result = 0;
    nums.forEach(n =>{String(n).split('').length %2 === 0 ? result ++ : result});
    
    return result;
};
