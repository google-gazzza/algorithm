// [Medium] 128. Longest Consecutive Sequence
// 128_longest_consecutive_sequence

// https://leetcode.com/problems/longest-consecutive-sequence
// Runtime: 416 ms, faster than 43.84% of JavaScript online submissions for Longest Consecutive Sequence.
// Memory Usage: 52.5 MB, less than 16.43% of JavaScript online submissions for Longest Consecutive Sequence.

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const numMap = new Map();
  let max = 0;
  nums.forEach((num) => numMap.set(num, 1));
  nums.forEach((num) => {
    const before = num - 1;
    if (numMap.has(before) === true) {
      numMap.set(num, 0);
    }
  });
  nums.forEach((num) => {
    if (numMap.get(num) === 1) {
      let count = 1;
      while (numMap.has(num + count) === true) {
        count += 1;
      }
      max = Math.max(max, count);
    }
  });

  return max;
};

longestConsecutive([100, 4, 200, 1, 3, 2]); //?
longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]); //?
