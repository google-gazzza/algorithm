// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Runtime: 52 ms, faster than 92.43% of JavaScript online submissions for Two Sum II - Input array is sorted.
// Memory Usage: 35.3 MB, less than 34.78% of JavaScript online submissions for Two Sum II - Input array is sorted.
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let len = numbers.length;
    let start, end, mid, checkValue;

    for(let i=0; i<len; i++){
        checkValue = target - numbers[i];
        start = i+1;
        end = len;

        while(start<=end){
            mid = Math.floor((start+end)/2)
            if(numbers[mid]===checkValue){
                return [i+1, mid+1];
            }
            if(numbers[mid]>checkValue){
                end = mid-1;
                if(len>end){
                    len=end;
                }
            }else{
                start = mid+1;
            }
        }
    }       
};