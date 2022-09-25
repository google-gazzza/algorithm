/*
1985-find-the-kth-largest-integer-in-the-array
leetcode/medium/1985. Find the Kth Largest Integer in the Array
URL: https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function kthLargestNumber(nums: string[], k: number): string {
  nums.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b);
    }
    return a.length - b.length;
  });

  return nums[nums.length - k];
}

// Example 1:
let nums = ['3', '6', '7', '10'];
let k = 4;
console.log(kthLargestNumber(nums, k));
// Output: "3"
// Explanation:
//   The numbers in nums sorted in non-decreasing order are ["3","6","7","10"].
//   The 4th largest integer in nums is "3".
//   Example 2:

nums = ['2', '21', '12', '1'];
k = 3;
console.log(kthLargestNumber(nums, k));
// Output: "2"
// Explanation:
//   The numbers in nums sorted in non-decreasing order are ["1","2","12","21"].
//   The 3rd largest integer in nums is "2".
//   Example 3:

nums = ['0', '0'];
k = 2;
console.log(kthLargestNumber(nums, k));
// Output: "0"
// Explanation:
//   The numbers in nums sorted in non-decreasing order are ["0","0"].
//   The 2nd largest integer in nums is "0".