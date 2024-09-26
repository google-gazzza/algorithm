/*
349-intersection-of-two-arrays
leetcode/easy/349. Intersection of Two Arrays
Difficulty: easy
URL: https://leetcode.com/problems/intersection-of-two-arrays/
*/

function getUniqItems(arr: number[]) {
    return Array.from(new Set(arr));
  }
  
  function intersection(nums1: number[], nums2: number[]): number[] {
    const uniqNum1 = getUniqItems(nums1);
    const uniqNum2 = getUniqItems(nums2);
  
    return uniqNum1.filter((num) => uniqNum2.includes(num));
  };
  
  // Example 1:
  //
  let nums1 = [1, 2, 2, 1];
  let nums2 = [2, 2];
  console.log(intersection(nums1, nums2));
  // Output: [2]
  // Example 2:
  //
  nums1 = [4, 9, 5];
  nums2 = [9, 4, 9, 8, 4];
  console.log(intersection(nums1, nums2));
  // Output: [9,4]
  // Explanation: [4,9] is also accepted.
  