// [Easy] 157. Read N Characters Given Read4
// 157_read_n_characters_given_read4

// https://leetcode.com/problems/read-n-characters-given-read4
// Runtime: 98 ms, faster than 21.05% of TypeScript online submissions for Read N Characters Given Read4.
// Memory Usage: 44.7 MB, less than 5.26% of TypeScript online submissions for Read N Characters Given Read4.

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
 * Definition for read4()
 * read4 = function(buf4: string[]): number {
 *     ...
 * };
 */

const solution = function (read4: any) {
  return function (buf: string[], n: number): number {
    let i = 0
    while (true) {
      const buf4 = []
      read4(buf4)
      const buf4Len = buf4.length
      for (let j: number = 0; j < buf4Len && i < n; j += 1) {
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
