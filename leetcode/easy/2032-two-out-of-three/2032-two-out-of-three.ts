/*
2032-two-out-of-three
leetcode/easy/2032. Two Out of Three
Difficulty: easy
URL: https://leetcode.com/problems/two-out-of-three/
*/

function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    nums1 = nums1.filter((e) => {
      return nums2.includes(e) || nums3.includes(e);
    });
  
    nums2 = nums2.filter((e) => {
      return nums1.includes(e) || nums3.includes(e);
    });
  
  
    return Array.from(new Set(nums1.concat(nums2)));
  }
  
  let nums1: number[] = [1, 1, 3, 2];
  let nums2: number[] = [2, 3];
  let nums3: number[] = [3];
  
  console.log(twoOutOfThree(nums1, nums2, nums3));
  // Output: [3, 2];
  
  
  nums1 = [3, 1];
  nums2 = [2, 3];
  nums3 = [1, 2];
  console.log(twoOutOfThree(nums1, nums2, nums3));
  // Output: [2,3,1]
  
  