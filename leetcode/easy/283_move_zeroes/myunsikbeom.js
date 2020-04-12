/**
 * @param {number[]} nums
 * @return {number}
 */
//Runtime: 64 ms, faster than 64.23% of JavaScript online submissions for Majority Element.
//Memory Usage: 38.5 MB, less than 7.14% of JavaScript online submissions for Majority Element.

var majorityElement = function(nums) {
    var result = {};

    var maj_arr = [{
        id: nums[0],
        len: 1
    }];
    for (var i = 1; i < nums.length; i++) {
        for (var j = 0; j < maj_arr.length; j++) {
            var iNum = nums[i];
            if (iNum === maj_arr[j].id) {
                maj_arr[j].len += 1;
                break;
            } else if (j === maj_arr.length - 1 && iNum !== maj_arr[j].id) {
                maj_arr.push({
                    id: nums[i],
                    len: 1
                });
                break;
            }
        }
    }
    
    result = maj_arr[0];
    
    for (var i = 1; i < maj_arr.length; i++) {
        if (result.len < maj_arr[i].len) {
            result = null;
            result = maj_arr[i];
        }

    }
    
    return result.id;
};
