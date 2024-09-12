// [Medium] 2177. Find Three Consecutive Integers That Sum to a Given Number
// 2177_find_three_consecutive_integers_that_sum_to_a_given_number

// https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number
// Runtime: 91 ms, faster than 40.54% of JavaScript online submissions for Find Three Consecutive Integers That Sum to a Given Number.
// Memory Usage: 42 MB, less than 80.78% of JavaScript online submissions for Find Three Consecutive Integers That Sum to a Given Number.

/**
 * @param {number} num
 * @return {number[]}
 */
const sumOfThree = function (num) {
  if (num % 3 !== 0) {
    return [];
  }
  const center = num / 3;
  return [center - 1, center, center + 1];
};

sumOfThree(33);
sumOfThree(4);
