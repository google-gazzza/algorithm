// [Easy] 2210. Count Hills and Valleys in an Array
// 2210_count_hills_and_valleys_in_an_array

// https://leetcode.com/problems/count-hills-and-valleys-in-an-array
// Runtime: 60 ms, faster than 98.13% of JavaScript online submissions for Count Hills and Valleys in an Array.
// Memory Usage: 42.2 MB, less than 71.88% of JavaScript online submissions for Count Hills and Valleys in an Array.

/**
 * @param {number[]} nums
 * @return {number}
 */
const countHillValley = function (nums) {
  const limit = nums.length - 1;
  let result = 0;
  const isValid = (prev, now, next) => {
    return (prev < now && now > next) || (prev > now && now < next);
  };

  let targetIndex = 0;
  let prev = nums[targetIndex];
  targetIndex += 1;
  while (targetIndex < limit) {
    const now = nums[targetIndex];
    const next = nums[targetIndex + 1];
    if (prev !== now && now !== next) {
      if (isValid(prev, now, next) === true) {
        result += 1;
      }
      prev = now;
    }
    targetIndex += 1;
  }

  return result;
};

countHillValley([2, 4, 1, 1, 6, 5]);
countHillValley([6, 6, 5, 5, 4, 1]);
