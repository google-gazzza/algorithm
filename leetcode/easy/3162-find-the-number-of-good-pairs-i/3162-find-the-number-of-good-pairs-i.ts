// 3162-find-the-number-of-good-pairs-i
// URL: https://leetcode.com/problems/find-the-number-of-good-pairs-i/description/


function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
    const divisibleTarget = nums2.map((num) => num * k);
    const result = [];
  
    for (let i = 0; i < nums1.length; i++) {
      divisibleTarget.forEach((num, index) => {
        if (nums1[i] % num === 0) {
          result.push([nums1[i], nums2[index]]);
        }
      });
    }
  
    return result.length;
  }
  