// [Medium] 702. Search in a Sorted Array of Unknown Size
// 702_search_in_a_sorted_array_of_unknown_size

// https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size
// Runtime: 84 ms, faster than 50.00% of TypeScript online submissions for Search in a Sorted Array of Unknown Size.
// Memory Usage: 42.7 MB, less than 50.00% of TypeScript online submissions for Search in a Sorted Array of Unknown Size.

/**
 * class ArrayReader {
 *		// This is the ArrayReader's API interface.
 *		// You should not implement it, or speculate about its implementation
 *		get(index: number): number {};
 *  };
 */

function search(reader: ArrayReader, target: number): number {
  const findTarget = (left: number, right: number): number => {
    while (left <= right) {
      const mid: number = ~~((left + right) / 2)
      const midValue: number = reader.get(mid)
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

  const findBoundaries = (left: number, right: number): number => {
    const rightValue: number = reader.get(right)
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
