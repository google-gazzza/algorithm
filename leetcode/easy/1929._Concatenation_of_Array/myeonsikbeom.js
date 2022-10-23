/**
 * @param {number[]} nums
 * @return {number[]}
 Runtime: 137 ms, faster than 40.96% of JavaScript online submissions for Concatenation of Array.
Memory Usage: 44.9 MB, less than 79.77% of JavaScript online submissions for Concatenation of Array.
 */
var getConcatenation = function(nums) {
    const convertArr = new Array(nums.length * 2);
    let len = nums.length;
    for(let i=0;i<len;i++){
        convertArr[i]=nums[i];
        convertArr[i+len]=nums[i];
        
    }
    return convertArr;
}
/** simple Answer */
// var getConcatenation = function(nums) {
//     return nums.concat(nums)
// };