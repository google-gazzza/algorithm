//Runtime: 184 ms, faster than 12.85% of JavaScript online submissions for Two Sum.
//Memory Usage: 34.6 MB, less than 78.10% of JavaScript online submissions for Two Sum.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
    var result = [];
    for(var i=0;i<len;i++){
        var sub = target-nums[i];
        for(var j=0;j<len;j++){
            if(result.length ===0 && i !== j && nums[j] === sub ){
                result.push(i);
                result.push(j);
            }
        }

    }
    return result;
};
