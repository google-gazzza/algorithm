/*
384-shuffle-an-array

# leetcode/medium/384. Shuffle an Array
Difficulty: medium
URL: https://leetcode.com/problems/shuffle-an-array/
Tags: Top Interview Questions - easy Collection

## Approach

### en

### kr

## Solution
### JavaScript
*/

/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
  this.originalArray = nums.slice();
  this.shuffledArray = [];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.shuffledArray = this.originalArray.slice();
  
  return this.shuffledArray;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const mixedTarget = this.originalArray.slice();
  this.shuffledArray = [];
  
  while (mixedTarget.length) {
    const randomBase = Math.floor((Math.random() * 10 * this.originalArray.length));
    const targetIndex = randomBase % mixedTarget.length;
    
    this.shuffledArray.push(mixedTarget[targetIndex]);
    mixedTarget.splice(targetIndex, 1);
  }
  
  return this.shuffledArray;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

test('shuffle', () => {
  const arr1 = [1, 2, 3];
  
  const solution = new Solution([1, 2, 3]);
  expect(JSON.stringify(solution.shuffle()) !== JSON.stringify(arr1));
  // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must be equally likely to be returned. Example: return [3, 1, 2]
  expect(JSON.stringify(solution.reset()) === JSON.stringify(arr1)).toBeTruthy();
  // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
  expect(JSON.stringify(solution.shuffle()) !== JSON.stringify(arr1));
  // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]
});
