/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Runtime: 84 ms, faster than 43.05% of JavaScript online submissions for Decompress Run-Length Encoded List.
//Memory Usage: 37.4 MB, less than 100.00% of JavaScript online submissions for Decompress Run-Length Encoded List.
var decompressRLElist = function(nums) {
    var result = [];
    if(nums.length %2 !== 0) return [];
    if(nums.length<2 || nums.length > 100) return [];
    
    for(var i=0;i<nums.length;i++){
        var _arr = [nums[2*i],nums[2*i+1]]
        for(var j=0;j<_arr[0];j++){
            result.push(_arr[1]);
        }
    }
    return result;
};
