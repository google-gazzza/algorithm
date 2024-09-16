// [Easy] 747. Largest Number At Least Twice of Others
// 747_largest_number_at_least_twice_of_others

// https://leetcode.com/problems/largest-number-at-least-twice-of-others
// Runtime: 88 ms, faster than 46.34% of TypeScript online submissions for Largest Number At Least Twice of Others.
// Memory Usage: 40.6 MB, less than 9.76% of TypeScript online submissions for Largest Number At Least Twice of Others.

/**
 * @param {number[]} nums
 * @return {number}
 */
function dominantIndex(nums: number[]): number {
  if (nums.length === 1) {
    return 0
  }
  const indexedNums: [number, number][] = nums.map((item, index) => [item, index])
  indexedNums.sort((a, b) => b[0] - a[0])
  const [first, second, ...rest] = indexedNums
  return first[0] >= second[0] * 2 ? first[1] : -1
}

dominantIndex([3, 6, 1, 0]) //?
dominantIndex([1, 2, 3, 4]) //?
dominantIndex([0, 0, 0, 1]) //?
dominantIndex([1]) //?
