// https://leetcode.com/problems/3sum/submissions/
// Runtime: 152 ms, faster than 90.69% of JavaScript online submissions for 3Sum.
// Memory Usage: 46.5 MB, less than 90.00% of JavaScript online submissions for 3Sum.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    
    if (nums.length < 3)  return result;
    
    // sort first
    nums.sort((a,b) => a-b);
    
    for (let i = 0; i < nums.length -2; i++) {
        if (nums[i] > 0) break; // sum of positives cann't be 0
        
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let j = i+1;
        let k = nums.length -1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if ( sum === 0 ) {
                result.push([nums[i],nums[j],nums[k]]);
                
                // reduce duplication
                while (nums[j] === nums[j+1]) j++;
                while (nums[k] === nums[k-1]) k--;
                
                j++;
                k--;
            } else if ( sum < 0 )
                j++;
            else  // sum > 0
                k--;
        }
    }
    return result;
}