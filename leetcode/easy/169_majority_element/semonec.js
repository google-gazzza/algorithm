// https://leetcode.com/problems/majority-element/submissions/
// Runtime: 56 ms, faster than 92.02% of JavaScript online submissions for Majority Element.
// Memory Usage: 37.8 MB, less than 50.00% of JavaScript online submissions for Majority Element.
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    for (let n of nums) {
        map[n] ? map[n] += 1 : map[n] = 1;
    }
    let majority = undefined;
    const hurdle = nums.length/2
    for (let key in map) {
        if (map[key] > hurdle && map[key] > (majority ? map[majority] : 0)) {
            majority = key;
        }
    }
    return majority;
};