/*
283-move-zeroes

# leetcode/easy/283. Move Zeroes
Difficulty: easy
URL: https://leetcode.com/problems/move-zeroes/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const moveZeroes = function (nums) {
  let rightIndex = nums.length - 1;
  
  for (let i = 0; i < nums.length; i += 1) {
    if (rightIndex === 0) {
      return;
    }
    
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i, 1);
      rightIndex -= 1;
      i -= 1;
    }
  }
};

test('test', () => {
  let nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  expect(nums).toStrictEqual([1, 3, 12, 0, 0]);
  
  nums = [0];
  moveZeroes(nums);
  expect(nums).toStrictEqual([0]);
});
