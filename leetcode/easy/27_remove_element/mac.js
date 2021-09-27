// https://leetcode.com/problems/remove-element/
// Runtime: 52 ms, faster than 88.31% of JavaScript online submissions for Remove Element.
// Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Remove Element.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const main = {
        serve : function(e, v, i) {
            if(e[i] === v) {
                 e.splice(i, 1);
             }
        },
        
        init : function(e, l, v) {
            for (let i = l; i >= 0; i--) {
                main.serve(e, v, i);
            }
            
            return e.length;
        }
    }
    
    return main.init(nums, nums.length-1, val);
};