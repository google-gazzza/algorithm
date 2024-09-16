// [Easy] 2210. Count Hills and Valleys in an Array
// 2210_count_hills_and_valleys_in_an_array

// https://leetcode.com/problems/count-hills-and-valleys-in-an-array
// Runtime: 114 ms, faster than 16.67% of TypeScript online submissions for Count Hills and Valleys in an Array.
// Memory Usage: 42.7 MB, less than 91.67% of TypeScript online submissions for Count Hills and Valleys in an Array.

function countHillValley(nums: number[]): number {
  const limit = nums.length - 1;
  let result = 0;
  const isValid = (prev: number, now: number, next: number): boolean => {
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
}
