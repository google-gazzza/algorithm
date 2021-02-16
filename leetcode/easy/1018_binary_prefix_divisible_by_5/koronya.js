// [Easy] 1018. Binary Prefix Divisible By 5
// 1018_binary_prefix_divisible_by_5

// https://leetcode.com/problems/binary-prefix-divisible-by-5
// Runtime: 80 ms, faster than 98.61% of JavaScript online submissions for Binary Prefix Divisible By 5.
// Memory Usage: 41.9 MB, less than 80.56% of JavaScript online submissions for Binary Prefix Divisible By 5.

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
const prefixesDivBy5 = function (A) {
  let before = 0
  return A.map((item) => {
    before = (before * 2 + item) % 5
    return before % 5 === 0 ? true : false
  })
}

// prefixesDivBy5([0, 1, 1]) //?
// prefixesDivBy5([1, 1, 1]) //?
// prefixesDivBy5([0, 1, 1, 1, 1, 1]) //?
// prefixesDivBy5([1, 1, 1, 0, 1]) //?
// prefixesDivBy5([1, 1, 1, 0, 1, 0, 0, 1]) //?
