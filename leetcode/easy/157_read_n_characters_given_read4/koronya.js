// [Easy] 157. Read N Characters Given Read4
// 157_read_n_characters_given_read4

// https://leetcode.com/problems/read-n-characters-given-read4
// Runtime: 54 ms, faster than 98.99% of JavaScript online submissions for Read N Characters Given Read4.
// Memory Usage: 42.3 MB, less than 28.28% of JavaScript online submissions for Read N Characters Given Read4.

/**
 * Definition for read4()
 *
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
const solution = function (read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function (buf, n) {
    let i = 0
    while (true) {
      const buf4 = []
      read4(buf4)
      const buf4Len = buf4.length
      for (let j = 0; j < buf4Len && i < n; j += 1 || 0) {
        i += 1
        buf[i] = buf4[j]
      }
      if (buf4Len < 4) {
        break
      }
    }

    return i
  }
}
