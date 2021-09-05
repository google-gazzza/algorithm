// [Medium] 702. Search in a Sorted Array of Unknown Size
// 702_search_in_a_sorted_array_of_unknown_size

// https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size
// Runtime: 66 ms, faster than 97.54% of JavaScript online submissions for Search in a Sorted Array of Unknown Size.
// Memory Usage: 42.3 MB, less than 70.49% of JavaScript online submissions for Search in a Sorted Array of Unknown Size.

/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
const search = function (reader, target) {
  const findTarget = (left, right) => {
    while (left <= right) {
      const mid = ~~((left + right) / 2)
      const midValue = reader.get(mid)
      if (midValue === target) {
        return mid
      } else if (midValue < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return -1
  }

  const findBoundaries = (left, right) => {
    const rightValue = reader.get(right)
    if (rightValue === target) {
      return right
    }
    if (rightValue > target) {
      return findTarget(left, right)
    }
    return findBoundaries(right, right * 2)
  }

  return findBoundaries(0, 1)
}

search([-1, 0, 3, 5, 9, 12], 9)
