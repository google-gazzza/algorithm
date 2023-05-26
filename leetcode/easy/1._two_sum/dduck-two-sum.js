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


// ------------------------------
// hashing
// ------------------------------
function twoSum(nums, target) {
  const set = new Set(nums);
  let result;
  
  nums.some((e) => {
    if (set.has(target - e)) {
      const left = nums.indexOf(e);
      const right = nums.lastIndexOf(target - e);
      
      if (left !== right) {
        result = [left, right];
        return true;
      }
    }
  });
  
  return result;
}

// ------------------------------
// brute force
// ------------------------------
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i += 1) {
//     for (let j = i + 1; j < nums.length; j += 1) {
//       const sum = (nums[i] + nums[j]);
//       if (sum === target) {
//         return [i, j];
//       }
//     }
//   }
// };


test('test', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
  expect(twoSum([2, 5, 5, 11], 10)).toStrictEqual([1, 2]);
  expect(twoSum([0, 4, 3, 0], 0)).toStrictEqual([0, 3]);
});
