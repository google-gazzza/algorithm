// https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/
// Runtime: 52 ms, faster than 87.46% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 34.1 MB, less than 11.54% of JavaScript online submissions for Search in Rotated Sorted Array.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums || !nums.length) return -1;
    let search = (l, r) => {
        if (l > r) return -1;
        const pivot = Math.floor((l+r)/2);
        if (nums[pivot] === target) return pivot;

        if (nums[l] <= nums[pivot]) { // increasing.. roated point is right
            if (nums[l] <= target && target <= nums[pivot])
                return search(l, pivot-1);
            else {
                return search(pivot+ 1, r);
            }
        } else {
            if (nums[pivot] <= target && target <= nums[r])
                return search(pivot +1, r);
            else {
                return search(l, pivot-1);
            }

        }
    }
    return search(0, nums.length -1);
};