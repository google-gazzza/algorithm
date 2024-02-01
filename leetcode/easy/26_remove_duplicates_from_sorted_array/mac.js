// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Runtime: 80 ms, faster than 55.95% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 37.6 MB, less than 25.00% of JavaScript online submissions for Remove Duplicates from Sorted Array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const main = {
        init : function(e) {
            for (let i = 1; i < e.length; i++) {
                if (e[i-1] === e[i]) {
                    e.splice(i, 1);
                    i--;
                }
            }
            
            return e;
        }
    }
    
    main.init(nums);
    
};