// [Medium] 1533. Find the Index of the Large Integer
// 1533_find_the_index_of_the_large_integer

// https://leetcode.com/problems/find-the-index-of-the-large-integer
// Runtime: 184 ms, faster than 100.00% of TypeScript online submissions for Find the Index of the Large Integer.
// Memory Usage: 62.8 MB, less than 100.00% of TypeScript online submissions for Find the Index of the Large Integer.

/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * class ArrayReader {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y]
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     compareSub(l: number, r: number, x: number, y: number): number { };
 *
 *     // Returns the length of the array
 *     length(): number { };
 * };
 */

function getIndex(reader: ArrayReader): number {
  const readerLen: number = reader.length()
  let rest: number = readerLen
  const add: number = Math.ceil(rest / 2) - 1
  let left1: number = 0
  let right2: number = readerLen - 1
  let right1: number = left1 + add
  let left2: number = right2 - add
  while (rest > 2) {
    const comp: number = reader.compareSub(left1, right1, left2, right2)
    if (comp === 1) {
      right2 = right1
    } else if (comp === -1) {
      left1 = left2
    } else {
      return right1
    }
    rest = right2 - left1 + 1
    const add: number = Math.ceil(rest / 2) - 1
    right1 = left1 + add
    left2 = right2 - add
  }

  return reader.compareSub(left1, right1, left2, right2) === 1 ? left1 : right2
}
