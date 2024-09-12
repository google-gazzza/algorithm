// [Easy] 1893. Check if All the Integers in a Range Are Covered
// 1893_check_if_all_the_integers_in_a_range_are_covered

// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered
// Runtime: 76 ms, faster than 84.21% of TypeScript online submissions for Check if All the Integers in a Range Are Covered.
// Memory Usage: 40.6 MB, less than 68.42% of TypeScript online submissions for Check if All the Integers in a Range Are Covered.

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
function isCovered(ranges: number[][], left: number, right: number): boolean {
  const coverSet = new Set<number>()
  ranges.forEach((range: number[]) => {
    const [start, end] = range
    for (let i: number = start; i <= end; i += 1) {
      coverSet.add(i)
    }
  })
  for (let i: number = left; i <= right; i += 1) {
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
