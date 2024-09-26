/*
977-squares-of-a-sorted-array
leetcode/easy/977. Squares of a Sorted Array
Difficulty: easy
URL: https://leetcode.com/problems/squares-of-a-sorted-array/
*/


/*

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 */
function sortedSquares(nums: number[]): number[] {
    return nums.map(n => n * n).sort((a, b) => a - b);
  }
  
  let nums: number[] = [-4, -1, 0, 3, 10];
  console.log(sortedSquares(nums));
  // Output: [0,1,9,16,100]
  
  nums = [-7, -3, 2, 3, 11];
  console.log(sortedSquares(nums));
  // Output: [4,9,9,49,121]
  