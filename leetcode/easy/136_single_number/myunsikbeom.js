/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime: 1720 ms, faster than 5.05% of JavaScript online submissions for Single Number.
//Memory Usage: 37.7 MB, less than 28.85% of JavaScript online submissions for Single Number.
 var singleNumber = function(nums) {
    var i = 0;
    if (!nums) return 0;
    if (nums.length === 1) return nums[0];
    for (i = nums.length - 1; i >= 0; i--) {
        
        var _arr = nums.filter((el) => el === nums[i]);
        if (_arr.length === 1) {
            break;
        } else {
            continue;
        }
    }
    return nums[i];
};
