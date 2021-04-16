// [Easy] 747. Largest Number At Least Twice of Others
// 747_largest_number_at_least_twice_of_others

// https://leetcode.com/problems/largest-number-at-least-twice-of-others
// Runtime: 80 ms, faster than 76.24% of JavaScript online submissions for Largest Number At Least Twice of Others.
// Memory Usage: 40.4 MB, less than 9.67% of JavaScript online submissions for Largest Number At Least Twice of Others.

/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function (nums) {
  if (nums.length === 1) {
    return 0
  }
  const indexedNums = nums.map((item, index) => [item, index])
  indexedNums.sort((a, b) => b[0] - a[0])
  const [first, second, ...rest] = indexedNums
  return first[0] >= second[0] * 2 ? first[1] : -1
}

dominantIndex([3, 6, 1, 0]) //?
dominantIndex([1, 2, 3, 4]) //?
dominantIndex([0, 0, 0, 1]) //?
dominantIndex([1]) //?
