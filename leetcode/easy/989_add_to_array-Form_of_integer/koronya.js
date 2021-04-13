// [Easy] 989. Add to Array-Form of Integer
// 989_add_to_array-form_of_integer

// https://leetcode.com/problems/add-to-array-form-of-integer
// Runtime: 184 ms, faster than 43.24% of JavaScript online submissions for Add to Array-Form of Integer.
// Memory Usage: 44.8 MB, less than 55.86% of JavaScript online submissions for Add to Array-Form of Integer.

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = function (num, k) {
  return String(BigInt(num.reduce((acc, cur) => acc + cur, '')) + BigInt(k))
    .split('')
    .map((item) => Number(item))
}

// addToArrayForm([1, 2, 0, 0], 34)//?
addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516) //?
