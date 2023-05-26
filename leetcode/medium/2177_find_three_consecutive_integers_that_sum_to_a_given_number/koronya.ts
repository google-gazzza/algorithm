// [Medium] 2177. Find Three Consecutive Integers That Sum to a Given Number
// 2177_find_three_consecutive_integers_that_sum_to_a_given_number

// https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number
// Runtime: 105 ms, faster than 45.72% of TypeScript online submissions for Find Three Consecutive Integers That Sum to a Given Number.
// Memory Usage: 44 MB, less than 94.29% of TypeScript online submissions for Find Three Consecutive Integers That Sum to a Given Number.

function sumOfThree(num: number): number[] {
  if (num % 3 !== 0) {
    return [];
  }
  const center = num / 3;
  return [center - 1, center, center + 1];
}
