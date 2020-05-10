// https://leetcode.com/problems/permutations/submissions/
// Runtime: 64 ms, faster than 86.77% of JavaScript online submissions for Permutations.
// Memory Usage: 37.6 MB, less than 8.00% of JavaScript online submissions for Permutations.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    
    
    let permutation = (curr, values) => {
        if (!values.length) {
            result.push(curr);
            return;
        }
        for (let i = 0; i < values.length; i++) {
            let sliced = values.slice(0,i);
            sliced.push(...values.slice(i+1, values.length));
            permutation([...curr, values[i]], sliced);
        }
    }
    
    permutation([], nums);
    return result;
};