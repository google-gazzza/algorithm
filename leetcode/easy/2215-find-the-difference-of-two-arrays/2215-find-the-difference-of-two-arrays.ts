/*
2215-find-the-difference-of-two-arrays
leetcode/easy/2215. Find the Difference of Two Arrays
URL: https://leetcode.com/problems/find-the-difference-of-two-arrays/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [
    Array.from(set1).filter((x) => !set2.has(x)),
    Array.from(set2).filter((x) => !set1.has(x)),
  ];
}

let nums1 = [1, 2, 3];
let nums2 = [2, 4, 6];
console.log(findDifference(nums1, nums2));
// Output: [[1,3],[4,6]]

nums1 = [1, 2, 3, 3];
nums2 = [1, 1, 2, 2];
console.log(findDifference(nums1, nums2));
// Output: [[3],[]]
