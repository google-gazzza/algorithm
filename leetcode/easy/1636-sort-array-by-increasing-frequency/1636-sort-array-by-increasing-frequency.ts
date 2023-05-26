/*
1636-sort-array-by-increasing-frequency
leetcode/easy/1636. Sort Array by Increasing Frequency
Difficulty: easy
URL: https://leetcode.com/problems/sort-array-by-increasing-frequency/

NOTE: Description

NOTE: Constraints
 - 1 <= nums.length <= 100
 - -100 <= nums[i] <= 100

NOTE: Explanation
*/
function frequencySort(nums: number[]): number[] {
  const freq: { [key: number]: number } = {};

  nums.forEach((num) => {
    freq[num] = (freq[num] || 0) + 1;
  });

  nums.sort((a, b) => {
    if (freq[a] === freq[b]) {
      return b - a;
    }
    return freq[a] - freq[b];
  });

  return nums;
}

// Example 1:
let nums = [1, 1, 2, 2, 2, 3];
console.log(frequencySort(nums));
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
// Example 2:

nums = [2, 3, 1, 3, 2];
console.log(frequencySort(nums));
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
//   Example 3:

nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1];
console.log(frequencySort(nums));
// Output: [5,-1,4,4,-6,-6,1,1,1]
