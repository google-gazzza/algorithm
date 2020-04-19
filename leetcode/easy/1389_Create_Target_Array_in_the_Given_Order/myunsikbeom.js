/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
//Runtime: 64 ms, faster than 16.89% of JavaScript online submissions for Create Target Array in the Given Order.
//Memory Usage: 36.3 MB, less than 100.00% of JavaScript online submissions for Create Target Array in the Given Order.
var createTargetArray = function(nums, index) {
    var result = [];
    if(index.length === 1){
        return [nums[0]];
    }
    for(var i=0;i<nums.length;i++){
        if(index[i]!==i){
            var slice = index[i]===result.length-1 ? result.slice(result.length-1) : result.slice(index[i]);
            result[index[i]] = nums[i];
            for(var j=result.length-1;j>index[i];j--){
                result.splice(j,1);
            }
            result = result.concat(slice);
            
        }else{
            result.push(nums[i]);
        }
    }
    return result;
};
