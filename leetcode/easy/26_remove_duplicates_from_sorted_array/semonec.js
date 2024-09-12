// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Runtime: 84 ms, faster than 41.75% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 39.7 MB, less than 8.33% of JavaScript online submissions for Remove Duplicates from Sorted Array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || nums.length === 0) return 0;
    if (nums.length === 1) return 1;
    
    let popCount = 0;
    let curr = 0;
    let next = 1;
    while (next < nums.length) {
        if (nums[curr] === nums[next]) {
            nums[next] = Number.MAX_SAFE_INTEGER;
            popCount++;
            next++;
        } else {
            curr = next;
            next = curr + 1;
        }
        
    }
    nums.sort((a,b) => a-b);
    while (popCount) {
        nums.pop();
        popCount--;
    }
    return nums.length;
};