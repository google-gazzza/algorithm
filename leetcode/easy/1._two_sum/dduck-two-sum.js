/*
two-sum

# leetcode/easy/Two Sum
Difficulty: easy
URL: https://leetcode.com/problems/two-sum/

## Approach

### en
1.brute force

### kr
1.brute force로 해결합니다.

## Solution
### JavaScript

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const sum = (nums[i] + nums[j]);
      if (sum === target) {
        return [i, j];
      }
    }
  }
};

// test
console.log(twoSum([2, 7, 11, 15], 9));
// ?
// [0, 1]
console.log(twoSum([3, 2, 4], 6));
// ?
// [1, 2]
console.log(twoSum([3, 3], 6));
// ?
// [0, 1]
console.log(twoSum([2, 5, 5, 11], 10));
//?
// [1, 2]
console.log(twoSum([0, 4, 3, 0], 0));
//?
// [0, 3]
