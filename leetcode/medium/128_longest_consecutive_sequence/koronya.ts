// [Medium] 128. Longest Consecutive Sequence
// 128_longest_consecutive_sequence

// https://leetcode.com/problems/longest-consecutive-sequence
// Runtime: 451 ms, faster than 38.68% of TypeScript online submissions for Longest Consecutive Sequence.
// Memory Usage: 53.5 MB, less than 25.55% of TypeScript online submissions for Longest Consecutive Sequence.

function longestConsecutive(nums: number[]): number {
  const numMap = new Map<number, number>();
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
}
