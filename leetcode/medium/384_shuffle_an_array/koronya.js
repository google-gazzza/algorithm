// https://leetcode.com/problems/shuffle-an-array/
// Runtime: 240 ms, faster than 49.89% of JavaScript online submissions for Shuffle an Array.
// Memory Usage: 58 MB, less than 66.67% of JavaScript online submissions for Shuffle an Array.

/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
  this.arr = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.arr
}

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  return this.arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1])
}
