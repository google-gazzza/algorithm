/*
697-degree-of-an-array
leetcode/easy/697. Degree of an Array
Difficulty: easy
URL: https://leetcode.com/problems/degree-of-an-array/

NOTE: Description

NOTE: Constraints
  - nums.length will be between 1 and 50,000.
  - nums[i] will be an integer between 0 and 49,999.

NOTE: Explanation
*/

function findShortestSubArray(nums: number[]): number {
  const counter = new Map<number, number>();

  nums.forEach((num) => {
    if (!counter.has(num)) {
      counter.set(num, 0);
    }
    counter.set(num, counter.get(num) + 1);
  });

  let values = Array.from(counter.entries());
  values.sort((a: [number, number], b: [number, number]) => b[1] - a[1]);
  values = values.filter((value) => value[1] === values[0][1]);

  let minDegree = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < values.length; i += 1) {
    const degree = nums.lastIndexOf(values[i][0]) - nums.indexOf(values[i][0]) + 1;
    if (degree < minDegree) {
      minDegree = degree;
    }
  }

  return minDegree;
}


// Example 1:
let nums = [1, 2, 2, 3, 1];
console.log(findShortestSubArray(nums));
// Output: 2
// Explanation:
//   The input array has a degree of 2 because both elements 1 and 2 appear twice.
//   Of the subarrays that have the same degree:
//   [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:
//
nums = [1, 2, 2, 3, 1, 4, 2];
console.log(findShortestSubArray(nums));
// Output: 6
// Explanation:
//   The degree is 3 because the element 2 is repeated 3 times.
//   So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
