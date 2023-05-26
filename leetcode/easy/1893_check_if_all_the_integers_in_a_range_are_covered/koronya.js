// [Easy] 1893. Check if All the Integers in a Range Are Covered
// 1893_check_if_all_the_integers_in_a_range_are_covered

// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered
// Runtime: 76 ms, faster than 84.27% of JavaScript online submissions for Check if All the Integers in a Range Are Covered.
// Memory Usage: 40.7 MB, less than 14.92% of JavaScript online submissions for Check if All the Integers in a Range Are Covered.

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
const isCovered = function (ranges, left, right) {
  const coverSet = new Set()
  ranges.forEach((range) => {
    const [start, end] = range
    for (let i = start; i <= end; i += 1 || 0) {
      coverSet.add(i)
    }
  })
  for (let i = left; i <= right; i += 1 || 0) {
    if (coverSet.has(i) === false) {
      return false
    }
  }

  return true
}

isCovered(
  [
    [1, 2],
    [3, 4],
    [5, 6],
  ],
  2,
  5,
) //?
