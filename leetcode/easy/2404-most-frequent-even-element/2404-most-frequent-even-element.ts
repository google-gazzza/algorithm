/*
2404-most-frequent-even-element
leetcode/easy/2404. Most Frequent Even Element
URL: https://leetcode.com/problems/most-frequent-even-element/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function mostFrequentEven(nums: number[]): number {
  const countMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] % 2 === 0) {
      const count = countMap.get(nums[i]) || 0;
      countMap.set(nums[i], count + 1);
    }
  }

  const result = Array.from(countMap.entries())
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }
      return b[1] - a[1];
    })
    .shift();

  if (result) {
    return result[0];
  }

  return -1;
}

let nums = [0, 1, 2, 2, 4, 4, 1];
console.log(mostFrequentEven(nums));
// Output: 2
// Explanation:
//   The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
//   We return the smallest one, which is 2.
// Example 2:

nums = [4, 4, 4, 9, 2, 4];
console.log(mostFrequentEven(nums));
// Output: 4
// Explanation: 4 is the even element appears the most.
//   Example 3:

nums = [29, 47, 21, 41, 13, 37, 25, 7];
console.log(mostFrequentEven(nums));
// Output: -1
// Explanation: There is no even element.

nums = [0, 0, 0, 0];
console.log(mostFrequentEven(nums));
