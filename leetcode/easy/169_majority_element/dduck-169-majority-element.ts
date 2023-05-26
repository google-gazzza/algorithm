/*
169-majority-element

# https://leetcode.com/problems/majority-element/
Difficulty: easy
URL:
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function majorityElement(nums: number[]): string {
  return Object.entries(nums.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, { '0': 0 }))
    .sort((a: [string, number], b: [string, number]) => b[1] - a[1])[0][0];
}

majorityElement([3, 2, 3]);
//?
majorityElement([2, 2, 1, 1, 1, 2, 2]);
//?
// Input: nums = [3,2,3]
// Output: 3
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
