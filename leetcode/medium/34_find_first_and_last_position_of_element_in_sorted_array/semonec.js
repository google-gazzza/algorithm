// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/submissions/
// Runtime: 36 ms, faster than 100.00% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
// Memory Usage: 35.1 MB, less than 30.00% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums[0] > target || nums[nums.length -1] < target) return [-1, -1];
    
    let mid = -1;
    let find = (l, r) => {
        if (l > r) 
            return [-1, -1];
        mid = Math.floor((l+r)/2);
        if (nums[mid] === target) {
            let left = mid, right = mid;
            while (nums[left -1] === target) left--;
            while (nums[right + 1] === target) right++;
            return [left, right];
        } else if (nums[l] <= target && target < nums[mid])
            return find(l, mid-1);
        else
            return find(mid+1, r);
    }
    return find(0, nums.length-1);
};