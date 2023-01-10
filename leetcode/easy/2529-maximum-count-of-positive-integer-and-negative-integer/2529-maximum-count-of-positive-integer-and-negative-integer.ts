/*
2529-maximum-count-of-positive-integer-and-negative-integer
leetcode/easy/2529. Maximum Count of Positive Integer and Negative Integer
URL: https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function maximumCount(nums: number[]): number {
  let negativeCount = 0;
  let positiveCount = 0;

  nums.forEach((num) => {
    if (num < 0) {
      negativeCount += 1;
    }
    if (num > 0) {
      positiveCount += 1;
    }
  });

  return Math.max(negativeCount, positiveCount);
}