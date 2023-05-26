// https://leetcode.com/problems/two-sum/
// Runtime: 52 ms, faster than 92.41% of JavaScript online submissions for Two Sum.
// Memory Usage: 36 MB, less than 14.88% of JavaScript online submissions for Two Sum.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (!nums || nums.length <= 1) return [];
    let map = new Map(); // can be let map = {};
    for (let i in nums) { // get index
        let complement = target - nums[i];
        if (map.has(complement))
            return [map.get(complement), i]; // can be return [map[complement], i];
        else
            map.set(nums[i], i); // can be map[nums[i]] = i;
    }
    return [];
};