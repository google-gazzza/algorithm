// [Easy] 989. Add to Array-Form of Integer
// 989_add_to_array-form_of_integer

// https://leetcode.com/problems/add-to-array-form-of-integer
// Runtime: 192 ms, faster than 27.27% of TypeScript online submissions for Add to Array-Form of Integer.
// Memory Usage: 45.7 MB, less than 36.36% of TypeScript online submissions for Add to Array-Form of Integer.

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
function addToArrayForm(num: number[], k: number): number[] {
  return String(BigInt(num.reduce((acc, cur) => acc + cur, '')) + BigInt(k))
    .split('')
    .map((item) => Number(item))
}

// addToArrayForm([1, 2, 0, 0], 34)//?
addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516) //?
