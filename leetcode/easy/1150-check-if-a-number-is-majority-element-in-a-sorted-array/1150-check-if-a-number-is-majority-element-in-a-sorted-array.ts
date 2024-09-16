// 1150-check-if-a-number-is-majority-element-in-a-sorted-array
// URL: https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/description/

function isMajorityElement(nums: number[], target: number): boolean {
    let count = 0;
  
    for (const num of nums) {
      if (num === target) {
        count++;
      }
    }
  
    return count > nums.length / 2;
  };
  