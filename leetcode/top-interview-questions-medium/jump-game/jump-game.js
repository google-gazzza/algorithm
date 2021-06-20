/*
jump-game

# leetcode/top-interview-questions/medium/Jump Game
Difficulty: medium
URL: https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/807
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  let index = nums.length - 1;
  
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    if (i + nums[i] >= index) {
      index = i;
    }
  }
  
  return index === 0;
};

test('canJump', () => {
  expect(canJump([2, 3, 1, 1, 4])).toEqual(true);
  expect(canJump([3, 2, 1, 0, 4])).toEqual(false);
  expect(canJump([0])).toEqual(true);
  expect(canJump([2, 5, 0, 0])).toEqual(true);
});
