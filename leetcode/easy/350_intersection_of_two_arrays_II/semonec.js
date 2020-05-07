// https://leetcode.com/problems/intersection-of-two-arrays-ii/submissions/
// Runtime: 60 ms, faster than 67.55% of JavaScript online submissions for Intersection of Two Arrays II.
// Memory Usage: 35.6 MB, less than 18.52% of JavaScript online submissions for Intersection of Two Arrays II.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {};
    for (const n of nums1)
        map[n] = !map[n] ? 1 : (map[n] + 1)
    
    let result = [];
    for (const n of nums2) {
        if (map[n]) {
            result.push(n);
            map[n] -= 1;
        }
    }
    return result;
};