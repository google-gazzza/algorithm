// [Medium] 1533. Find the Index of the Large Integer
// 1533_find_the_index_of_the_large_integer

// https://leetcode.com/problems/find-the-index-of-the-large-integer
// Runtime: 108 ms, faster than 100.00% of JavaScript online submissions for Find the Index of the Large Integer.
// Memory Usage: 65.3 MB, less than 66.67% of JavaScript online submissions for Find the Index of the Large Integer.

/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y]
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     @param {number} l, r, x, y
 *     @return {number}
 *     this.compareSub = function(l, r, x, y) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
const getIndex = function (reader) {
  const readerLen = reader.length()
  let rest = readerLen
  const add = Math.ceil(rest / 2) - 1
  let left1 = 0
  let right2 = readerLen - 1
  let right1 = left1 + add
  let left2 = right2 - add
  while (rest > 2) {
    const comp = reader.compareSub(left1, right1, left2, right2)
    if (comp === 1) {
      right2 = right1
    } else if (comp === -1) {
      left1 = left2
    } else {
      return right1
    }
    rest = right2 - left1 + 1
    const add = Math.ceil(rest / 2) - 1
    right1 = left1 + add
    left2 = right2 - add
  }

  return reader.compareSub(left1, right1, left2, right2) === 1 ? left1 : right2
}
