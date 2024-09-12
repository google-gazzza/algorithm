/*
4-median-of-two-sorted-arrays

# leetcode/hard/4. Median of Two Sorted Arrays
Difficulty: hard
URL: https://leetcode.com/problems/median-of-two-sorted-arrays/

## Approach

### en

### kr

## Solution
### JavaScript

*/

const findMedianSortedArrays = (nums1, nums2) => {
  let result = [];
  
  while (nums1.length && nums2.length) {
    if (nums1[0] <= nums2[0]) {
      result.push(nums1.shift());
    } else {
      result.push(nums2.shift());
    }
  }
  
  result = result.concat(...nums1, ...nums2);
  
  if (result.length % 2 === 1) {
    return result[Math.floor(result.length / 2)];
  }
  return (result[Math.floor(result.length / 2) - 1] + result[Math.floor(result.length / 2)]) / 2;
};


// test
console.log(findMedianSortedArrays([1, 3], [2]));
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

console.log(findMedianSortedArrays([1, 2], [3, 4]));
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

console.log(findMedianSortedArrays([0, 0], [0, 0]));
//   Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000
//

console.log(findMedianSortedArrays([], [1]));
// Input: nums1 = [], nums2 = [1]
// Output: 1.00000

console.log(findMedianSortedArrays([2], []));
// Input: nums1 = [2], nums2 = []
// Output: 2.00000

console.log(findMedianSortedArrays([3], [-2, -1]));
// -1
